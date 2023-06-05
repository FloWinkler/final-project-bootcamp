from django.urls import path
from payments.views import CreateCheckoutSession
from payments.views import Webhook

urlpatterns = [
    path('create_checkout_session/', CreateCheckoutSession.as_view(), name='checkout'),
    path('webhook/', Webhook.as_view(), name='webhook'),
]
