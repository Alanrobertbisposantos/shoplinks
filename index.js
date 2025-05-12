require('dotenv').config();
const express = require('express');
const app = express();
const carrierService = require('./carrierService');

app.use(express.json());

app.post('/carrier_service', carrierService);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
