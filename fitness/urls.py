from fitness.apps import FitnessConfig
from django.urls import path

from . import views
from .apps import FitnessConfig


app_name = FitnessConfig.name

urlpatterns = [path("", views.index, name="index")]
