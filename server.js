const stripe = require('stripe')('sk_test_51HdxovB6KrRuwHV6gjYobKMwj7PJV5OMzWELD5Y7gXW0vSYfoJ75iZPRIVNTYcTAUV62xBTKrMesMmSnMjrjGtm500y1Djh0MK');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.text());
app.use(express.static('.'));
const YOUR_DOMAIN = 'http://localhost:4242';
app.post('/create-session', async (req, res) => {
  console.log(req.body)
  const item = JSON.parse(req.body)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'GBP',
          product_data: {
            name: item.item,
            images: [item.img],
          },
          unit_amount: item.price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 4242'));
