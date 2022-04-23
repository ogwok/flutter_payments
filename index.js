import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";
const router = express.Router();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.post("/payments", async (req, res) => {
  console.log("====test===>", req.body);
  var data = JSON.stringify({
    tx_ref: "hooli-tx-1920bbtytty",
    amount: req.body.total,
    currency: "UGX",
    redirect_url: "http://localhost:3000/success",
    payment_options: "mobilemoneyuganda",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: req.body.email,
      phonenumber: "080****4528",
      name: req.body.name,
    },
    customizations: {
      title: "Joopara Checkout",
      logo: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
  });

  var config = {
    method: "post",
    url: "https://api.flutterwave.com/v3/payments",
    headers: {
      Authorization: "Bearer FLWSECK_TEST-d2f0dda6ec13dac4a1998afdcb30783d-X",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.send(response.data.data.link);
      res.redirect(response.data.data.link);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
