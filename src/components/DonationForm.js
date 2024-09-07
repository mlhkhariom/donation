import React, { useState } from 'react';
import { processStripePayment, processPayPalPayment, processCoinbaseCommercePayment } from '../utils/paymentGateways';

function DonationForm({ currency, gateway }) {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleDonation = async () => {
    try {
      let response;
      switch (gateway) {
        case 'stripe':
          response = await processStripePayment(amount, currency, name, email);
          break;
        case 'paypal':
          response = await processPayPalPayment(amount, currency, name, email);
          break;
        case 'coinbaseCommerce':
          response = await processCoinbaseCommercePayment(amount, currency, name, email);
          break;
        default:
          throw new Error('Invalid payment gateway');
      }

      // Handle successful payment
      console.log('Payment successful:', response);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  // ... rest of the component

  return (
    <div className="donation-form">
      <label htmlFor="amount">Donation Amount:</label>
      <input type="number" id="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      {/* ... other form fields */}
      <button onClick={handleDonation}>Donate</button>
    </div>
  );
}

export default DonationForm;