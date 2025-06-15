from rest_framework import viewsets, parsers, permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    Một ViewSet hoàn chỉnh cho việc quản lý Người dùng (CRUD).
    """
    queryset = User.objects.filter(is_active=True) # Bỏ .all() ở cuối nhé, nó là dư thừa
    serializer_class = UserSerializer
    parser_classes = [parsers.MultiPartParser,]

    def get_permissions(self):
        """Gán quyền tùy theo hành động."""
        if self.action == 'create':
            # Ai cũng có quyền tạo (đăng ký)
            permission_classes = [permissions.AllowAny]
        elif self.action == 'current_user':
            # Chỉ cần đã đăng nhập là có thể xem thông tin của mình
            permission_classes = [permissions.IsAuthenticated]
        else:
            # Các hành động khác (list, retrieve, update, destroy) mặc định yêu cầu Admin
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]

    @action(methods=['get'], url_path='current_user', url_name = 'current_user', detail=False)
    def current_user(self, request):
        user = request.user
        return Response(UserSerializer(user).data)