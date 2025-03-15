const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models/db'); // Import database connection

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
    res.send('Feastify Backend is running!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});