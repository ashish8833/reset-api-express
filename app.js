require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

const models = require('./models/index');

const {
    PORT
} = process.env;

app.use(cors());

app.get('/heartbeat', async (req, res) => { 

    res.status(200).json({
        message: 'Server running successfully'
    });

});

app.listen(PORT, async () => {
  console.log(`Tipper server run on port ${PORT}`);
});

