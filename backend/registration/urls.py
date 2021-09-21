from django.urls import path

from registration.views import RegistrationView, ValidationView, PasswordResetView, PasswordResetValidationView


urlpatterns = [
    path('registration/', RegistrationView.as_view()),
    path('registration/validate/', ValidationView.as_view()),
    path('password-reset/', PasswordResetView.as_view()),
    path('password-reset/validate/', PasswordResetValidationView.as_view()),
]
