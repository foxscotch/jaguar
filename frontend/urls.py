from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static

from . import views

if settings.DEBUG:
    urlpatterns = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + [
        path("", views.serve, name="serve_root"),
        re_path("^.*/", views.serve, name="serve"),
    ]
