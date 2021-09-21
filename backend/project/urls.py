"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # admin page
    path('backend/admin/', admin.site.urls),

    # JWT token
    path('backend/api/auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/auth/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),

    # User URL's
    path('backend/api/user/', include('user.urls')),

    # Registration URL's
    path('backend/api/', include('registration.urls')),

    # Team URL's
    path('backend/api/team/', include('team.urls')),

    # Tournament URL's
    path('backend/api/tournament/', include('tournament.urls')),

    # Invitation URL's
    path('backend/api/invitation/', include('invitation.urls')),

    # Tournament Bracket URL's
    path('backend/api/tournament/<int:id>/', include('bracket.urls')),

    # Match URL's
    path('backend/api/match/', include('match.urls')),

    # Standing URL's
    path('backend/api/tournament/<int:id>/', include('standing.urls')),
]
