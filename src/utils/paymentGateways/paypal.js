import paypal from 'paypal-rest-sdk';

paypal.initialize('your_paypal_client_id');

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