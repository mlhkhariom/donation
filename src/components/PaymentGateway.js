import Stripe from 'stripe';
import paypal from 'paypal-rest-sdk';
import CoinbaseCommerce from 'coinbase-commerce';

const stripe = new Stripe('your_stripe_secret_key');
paypal.initialize('your_paypal_client_id');
const coinbaseCommerce = new CoinbaseCommerce('your_coinbase_commerce_api_key');

export const processStripePayment = async (amount, currency, name, email) => {
  try {
    const { charges } = await stripe.charges.create({
      amount: amount * 100,
      currency,
      description: 'Donation',
      source: token.id,
      metadata: {
        name,
        email,
      },
    });

    // Store transaction data in database
    // ...

    return charges;
  } catch (error) {
    console.error('Stripe payment failed:', error);
    throw error;
  }
};

export const processPayPalPayment = async (amount, currency, name, email) => {
  try {
    const payment = await paypal.payment.create({
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: 'https://your-website.com/checkout/success',
        cancel_url: 'https://your-website.com/checkout/cancel',
      },
      transactions: [
        {
          amount: {
            total: amount,
            currency: currency,
          },
          description: 'Donation',
        },
      ],
    });

    // Redirect user to PayPal for payment
    window.location.href = payment.links[1].href;

    // Handle payment completion on return
    // ...
  } catch (error) {
    console.error('PayPal payment failed:', error);
    throw error;
  }
};

export const processCoinbaseCommercePayment = async (amount, currency, name, email) => {
  try {
    const charge = await coinbaseCommerce.charges.create({
      name: 'Donation',
      description: 'Donation',
      amount: amount * 100,
      currency: currency,
      metadata: {
        name,
        email,
      },
    });

    // Redirect user to Coinbase Commerce checkout
    window.location.href = charge.hosted_url;

    // Handle payment completion on return
    // ...
  } catch (error) {
    console.error('Coinbase Commerce payment failed:', error);
    throw error;
  }
};