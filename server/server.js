const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Replace with your MongoDB connection string
const MONGO_URI = 'your_mongodb_connection_string';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define the schema and model
const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Login = mongoose.model('Login', loginSchema);

// Define the POST route for form submission
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Save to MongoDB
    const newLogin = new Login({ email, password });
    await newLogin.save();

    res.status(200).json({ message: 'Form submission saved to MongoDB' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save form submission' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
