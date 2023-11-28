require("dotenv").config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

console.log(stripePublicKey, stripeSecretKey);

const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.get("/allProduits", (req, res) => {
  fs.readFile("products.json", (error, data) => {
    if (error) {
      res.status(500).end();
    } else {
      res.render("allProduits.ejs", {
        products: JSON.parse(data),
      });
    }
  });
});

app.get("/produit/:id", (req, res) => {
  fs.readFile("products.json", (error, data) => {
    if (error) {
      res.status(500).end;
    } else {
      let id = req.params.id;
      const a = req.body.nbr;
      console.log(a);
      res.render("produit.ejs", {
        products: JSON.parse(data),
        idB: id,
      });
    }
  });
});

app.listen(3000);

/*require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5500",
  })
);
*/

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
  [10, { priceInCents: 10000, name: "Item 1" }],
  [11, { priceInCents: 20000, name: "Item 2" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    console.log(req.body.productData);
    console.log(storeItems);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.productData.map((item) => {
        const storeItem = item.id;
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price,
          },
          quantity: item.quantity,
        };
        storeItem++;
      }),
      success_url: `${process.env.CLIENT_URL}/allProduits.html`,
      cancel_url: `${process.env.CLIENT_URL}/index.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/*
app.listen(3000);*/
