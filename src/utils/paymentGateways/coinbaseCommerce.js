import CoinbaseCommerce from 'coinbase-commerce';

const coinbaseCommerce = new CoinbaseCommerce('your_coinbase_commerce_api_key');

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