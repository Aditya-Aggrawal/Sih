
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    