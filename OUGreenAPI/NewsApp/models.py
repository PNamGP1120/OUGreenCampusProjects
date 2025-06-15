# NewsApp/models.py
from cloudinary.models import CloudinaryField
from django.db import models
from django.conf import settings
from django.utils import timezone


class NewsArticle(models.Model):
    class Status(models.TextChoices):
        PENDING = 'PENDING', 'Chờ duyệt'
        APPROVED = 'APPROVED', 'Đã duyệt'
        REJECTED = 'REJECTED', 'Đã từ chối'

    title = models.CharField(max_length=200)
    image = CloudinaryField('NewsArticle')
    content = models.TextField()
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='articles'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # --- CÁC TRƯỜNG MỚI ---
    status = models.CharField(
        max_length=10,
        choices=Status.choices,
        default=Status.PENDING  # Mặc định khi tạo là "Chờ duyệt"
    )
    approved_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name='approved_articles'  # Người đã duyệt bài
    )
    approved_at = models.DateTimeField(null=True, blank=True)  # Thời gian duyệt

    def __str__(self):
        return f"{self.title} [{self.status}]"