# AuthApp/permissions.py
from rest_framework.permissions import BasePermission

class IsAdminUser(BasePermission):
    """
    Chỉ cho phép truy cập nếu người dùng là Admin.
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.role == 'ADMIN')

class IsEditorUser(BasePermission):
    """
    Chỉ cho phép truy cập nếu người dùng là Editor.
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.role == 'EDITOR')


class IsAuthorOrAdmin(BasePermission):
    """
    Cho phép truy cập nếu là tác giả của đối tượng hoặc là Admin.
    """

    def has_object_permission(self, request, view, obj):
        # Admin có toàn quyền trên mọi đối tượng
        if request.user.is_authenticated and request.user.role == 'ADMIN':
            return True

        # Tác giả của bài viết được phép sửa/xóa bài viết của chính mình
        return obj.author == request.user
