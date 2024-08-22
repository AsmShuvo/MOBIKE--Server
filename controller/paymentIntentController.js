const createPaymentIntent = async (req, res) => {
  try {
    const { price } = req.body;
    // Validate the price
    if (isNaN(price) || price <= 0) {
      return res.status(400).json({
        error: "Invalid price value. Price must be a positive number.",
      });
    }

    // Calculate the amount in cents
    const amount = Math.round(price * 100);

    // Create the payment intent using Stripe's API
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    // Send the client secret to the client
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = createPaymentIntent;
