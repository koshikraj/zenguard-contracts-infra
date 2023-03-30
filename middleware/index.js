require('dotenv').config(); // enables loading .env vars
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const { RecoveryAccount } = require('./models');


const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/recoverydb', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('gm');
});

app.get('/accounts', async (req, res) => {
  const accounts = await RecoveryAccount.find();
  const response = {status: true, data: accounts}
  res.json(response);
});

app.post('/account', async (req, res) => {

  try {
  const account = new RecoveryAccount(req.body);
  await account.save();
  const response = {status: true, data: account}
  res.json(response);
  }
  catch(e) {
    const response = {status: false, data: e.message}
    res.json(response)
  }
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});