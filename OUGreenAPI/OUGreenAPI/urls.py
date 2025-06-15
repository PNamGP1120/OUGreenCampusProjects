# OUGreenCampus/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # URL cho OAuth2 (để lấy token, v.v...)
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    # URL cho API tin tức
    path('api/', include('NewsApp.urls')),
    # URL cho API thông tin đăng nhập
    path('api/', include('AuthApp.urls')),
]