import React, { useState } from 'react';
import { createUser } from '../utils/database';
import { useNavigate } from 'react-router-dom';

function UserRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const hashedPassword = await hashPassword(password);
      const userData = {
        name,
        email,
        password: hashedPassword,
      };

      await createUser(userData);

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  // ... rest of the component

  return (
    <div className="user-registration">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        {/* ... other form fields */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserRegistration;