from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from project import settings
from registration.views import RegistrationValidationView, RegistrationView
from user.views import CustomTokenObtainPairView

schema_view = get_schema_view(
    openapi.Info(
        title="TrueVR API",
        default_version='v1',
        description="TrueVR API.",
        terms_of_service="https://www.vr-center.ch/",
        contact=openapi.Contact(email="info@vr-center.ch"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,  # Set to False restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)

urlpatterns = [
    path('backend/api/v1/admin/', admin.site.urls),

    path('backend/api/v1/auth/registration/', RegistrationView.as_view(), name='registration'),
    path('backend/api/v1/auth/registration/validate/', RegistrationValidationView.as_view(), name='registration_validation'),

    path('backend/api/v1/auth/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/v1/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/v1/auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('backend/api/v1/users/', include('user.urls')),
    path('backend/api/v1/booking/', include('booking.urls')),
    path('backend/api/v1/bookingslot/', include('bookingslot.urls')),
    path('backend/api/v1/center/', include('center.urls')),
    path('backend/api/v1/court/', include('court.urls')),
    path('backend/api/v1/event/', include('event.urls')),
    path('backend/api/v1/game/', include('game.urls')),
    path('backend/api/v1/slot/', include('slot.urls')),
    path('backend/api/v1/payments/', include('payments.urls')),

    path('backend/api/v1/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('backend/api/v1/docs/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),


]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
