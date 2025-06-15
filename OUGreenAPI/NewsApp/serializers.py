# NewsApp/serializers.py
from rest_framework import serializers
from .models import NewsArticle

class NewsArticleSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    # Hiển thị username của người duyệt thay vì ID
    approved_by = serializers.ReadOnlyField(source='approved_by.username')

    class Meta:
        model = NewsArticle
        fields = [
            'id', 'title', 'image', 'content', 'author',
            'status', 'approved_by', 'approved_at', # Thêm các trường mới
            'created_at', 'updated_at'
        ]
        # Các trường này chỉ được thay đổi bởi server thông qua các action đặc biệt
        read_only_fields = ['status', 'approved_by', 'approved_at']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['image'] = instance.image.url if instance.image else None
        return representation