import React, { useContext, useState } from 'react';
import { Web3Context } from '../utils/web3';
import { DonationForm } from './DonationForm';

function LandingPage() {
  const { web3 } = useContext(Web3Context);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedGateway, setSelectedGateway] = useState('stripe');

  // ... rest of the component

  return (
    <div className="landing-page">
      <h1>Welcome to Our Donation Platform</h1>
      <p>Make a difference today!</p>
      <div className="currency-selector">
        <label htmlFor="currency-select">Currency:</label>
        <select id="currency-select" value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <div className="gateway-selector">
        <label htmlFor="gateway-select">Payment Gateway:</label>
        <select id="gateway-select" value={selectedGateway} onChange={(e) => setSelectedGateway(e.target.value)}>
          <option value="stripe">Stripe</option>
          <option value="paypal">PayPal</option>
          <option value="coinbaseCommerce">Coinbase Commerce</option>
          {/* Add more gateways as needed */}
        </select>
      </div>
      <DonationForm currency={selectedCurrency} gateway={selectedGateway} />
    </div>
  );
}

export default LandingPage;