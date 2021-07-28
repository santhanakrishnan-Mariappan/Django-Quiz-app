
from .settings import STATIC_FILES_DIR
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("quiz/", include("quizes.urls")),
   
]

urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_FILES_DIR)
