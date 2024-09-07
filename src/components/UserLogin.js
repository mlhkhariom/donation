import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/database';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser(email, password);

      if (user) {
        // Redirect to the dashboard or homepage
        navigate('/');
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // ... rest of the component

  return (
    <div className="user-login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {/* ... other form fields */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;