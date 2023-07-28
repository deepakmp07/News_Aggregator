// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 8080;

app.use(bodyParser.json());

// Create a MySQL connection pool (replace 'your-mysql-connection-config' with your actual MySQL connection configuration)
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'your-mysql-host',
  user: 'your-mysql-user',
  password: 'your-mysql-password',
  database: 'your-mysql-database',
});

// POST endpoint for user authentication
app.post('/api/v1/auth/authenticate', (req, res) => {
  const { email, password } = req.body;

  // Execute the MySQL query to find the user by email and password
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  pool.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }

    // Check if the user is found in the database
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If credentials are valid, return a success response
    res.json({ message: 'Login successful', token: 'your-generated-token' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
