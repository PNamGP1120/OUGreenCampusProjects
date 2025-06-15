# NewsApp/views.py
from django.utils import timezone
from django.db.models import Q  # 👈 Import Q object
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import NewsArticle
from .serializers import NewsArticleSerializer
# Import các lớp Permission mới và cũ
from AuthApp.permissions import IsAdminUser, IsEditorUser, IsAuthorOrAdmin


class NewsArticleViewSet(viewsets.ModelViewSet):
    queryset = NewsArticle.objects.all().order_by('-created_at')
    serializer_class = NewsArticleSerializer

    def get_queryset(self):
        """
        [QUYỀN XEM DỮ LIỆU]
        Tùy chỉnh danh sách bài viết trả về dựa trên vai trò người dùng.
        """
        user = self.request.user

        # 1. Nếu người dùng không đăng nhập, chỉ xem bài đã duyệt
        if not user.is_authenticated:
            return self.queryset.filter(status=NewsArticle.Status.APPROVED)

        # 2. Nếu người dùng là Admin, xem tất cả
        if user.role == 'ADMIN':
            return self.queryset

        # 3. Nếu người dùng là Editor, xem bài của mình (mọi trạng thái) HOẶC bài đã duyệt của người khác
        if user.role == 'EDITOR':
            return self.queryset.filter(
                Q(author=user) | Q(status=NewsArticle.Status.APPROVED)
            ).distinct()  # Dùng distinct() để tránh trùng lặp

        # 4. Mặc định cho các vai trò khác (VD: Visitor đã đăng nhập), chỉ xem bài đã duyệt
        return self.queryset.filter(status=NewsArticle.Status.APPROVED)

    def get_permissions(self):
        """
        [QUYỀN HÀNH ĐỘNG]
        Gán quyền thực hiện hành động (create, update, approve...).
        """
        # Ai cũng có thể gọi API xem danh sách/chi tiết. get_queryset() ở trên đã lo việc lọc dữ liệu.
        if self.action in ['list', 'retrieve']:
            self.permission_classes = [permissions.AllowAny]
        # Editor và Admin có thể tạo bài
        elif self.action == 'create':
            self.permission_classes = [IsAdminUser | IsEditorUser]
        # Admin có thể duyệt hoặc từ chối
        elif self.action in ['approve', 'reject']:
            self.permission_classes = [IsAdminUser]
        # Tác giả hoặc Admin có thể sửa/xóa
        elif self.action in ['update', 'partial_update', 'destroy']:
            self.permission_classes = [IsAuthorOrAdmin]
        # Mặc định cần xác thực
        else:
            self.permission_classes = [permissions.IsAuthenticated]

        return super().get_permissions()

    def perform_create(self, serializer):
        """Tự động gán tác giả là người dùng đang đăng nhập."""
        serializer.save(author=self.request.user)

    @action(detail=True, methods=['post'])
    def approve(self, request, pk=None):
        article = self.get_object()
        article.status = NewsArticle.Status.APPROVED
        article.approved_by = request.user
        article.approved_at = timezone.now()
        article.save()
        return Response(self.get_serializer(article).data, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def reject(self, request, pk=None):
        article = self.get_object()
        article.status = NewsArticle.Status.REJECTED
        article.approved_by = None
        article.approved_at = None
        article.save()
        return Response(self.get_serializer(article).data, status=status.HTTP_200_OK)