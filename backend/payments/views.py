import stripe
from project import settings
from rest_framework.views import APIView
from rest_framework.response import Response
import json
import logging
from django.middleware import csrf


stripe.api_key = settings.STRIPE_SECRET_KEY
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('django')

EVENT_STRIPE_PRICE_IDS = {
    '1': 'price_1MzyXEHv5HMWNo4teOjeU7au',
    '2': 'price_1MzzIJHv5HMWNo4thb471Iap',
}


class CreateCheckoutSession(APIView):
    def post(self, request):
        logger.info(request.data)
        csrf_token = csrf.get_token(request)

        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[{
                    'price': EVENT_STRIPE_PRICE_IDS[request.data['bookingData']['eventID']],
                    'quantity': 1
                }],
                mode='payment',
                customer_creation='always',
                customer_email=request.data['formData']['email'],
                success_url="https://truevrbooking.propulsion-learn.ch/confirmed-booking",
                cancel_url="https://truevrbooking.propulsion-learn.ch/error-booking",
                metadata={'csrf_token': csrf_token},
            )
            logger.warning(checkout_session)
            return Response({'url': checkout_session.url})
        except Exception as e:
            print('check error')
            return Response({'error': json.dumps(e)})


class Webhook(APIView):
    def post(self, request):
        event = None
        payload = request.body
        sig_header = request.META['HTTP_STRIPE_SIGNATURE']
        endpoint_secret = 'whsec_be9d5b3d5977aff2bf4e717d5873a9864783ce8fb488f8650b143bd1177cd472'
        logger.warning(sig_header)
        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, endpoint_secret
            )
        except Exception as e:
            raise e

        # Handle the event
        if event['type'] == 'payment_intent.succeeded':
            payment_intent = event['data']['object']
            logger.info(payment_intent)
            customer = stripe.Customer.retrieve(payment_intent.customer)
            logger.info(customer)
        # ... handle other event types
        else:
            print('Unhandled event type {}'.format(event['type']))

        return Response({'event': event})
