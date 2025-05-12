module.exports = (req, res) => {
  const rates = [
    {
      service_name: "Shoplinks Express",
      service_code: "SHOPLINKS_EXPRESS",
      total_price: 1900,
      currency: "USD",
      min_delivery_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      max_delivery_date: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString()
    }
  ];

  res.json({ rates });
};
