# email_reader/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('emails/', views.email_list, name='email_list'),
    path('emails/<int:pk>/', views.email_detail, name='email_detail'),
    path('emails/new/', views.email_create, name='email_create'),
    path('emails/<int:pk>/edit/', views.email_update, name='email_update'),
    path('emails/<int:pk>/delete/', views.email_delete, name='email_delete'),
    path('search/', views.search_email, name='search_email'),
]
