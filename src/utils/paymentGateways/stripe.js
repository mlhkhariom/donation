import Stripe from 'stripe';

const stripe = new Stripe('your_stripe_secret_key');

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
}; dn