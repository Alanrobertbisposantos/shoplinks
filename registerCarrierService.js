const axios = require('axios');
require('dotenv').config();

const registerCarrierService = async () => {
  try {
    const result = await axios.post(
      `https://${process.env.SHOPIFY_STORE}/admin/api/2024-01/carrier_services.json`,
      {
        carrier_service: {
          name: "Shoplinks",
          callback_url: "https://SEU_NGROK.io/carrier_service",
          service_discovery: true
        }
      },
      {
        headers: {
          "X-Shopify-Access-Token": process.env.ACCESS_TOKEN,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Carrier Service 'Shoplinks' registrado com sucesso:", result.data);
  } catch (err) {
    console.error("Erro ao registrar Carrier Service:", err.response?.data || err.message);
  }
};

registerCarrierService();
