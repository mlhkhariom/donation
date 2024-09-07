import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'your_database_host',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name'
});

// Example functions for interacting with the database
export const createUser = (userData) => {
  connection.query('INSERT INTO users SET ?', userData, (error, results) => {
    if (error) {
      console.error('Error creating user:', error);
    } else {
      console.log('User created successfully');
    }
  });
};

export const getDonationHistory = (userId) => {
  connection.query('SELECT * FROM donations WHERE user_id = ?', [userId], (error, results) => {
    if (error) {
      console.error('Error fetching donation history:', error);
    } else {
      console.log('Donation history:', results);
    }
  });
};

// ... other database functions as needed
