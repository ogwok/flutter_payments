const express = require("express");
const bodyParser = require("body-parser");
const stepRoutes = require("./src/routes/product.routes");
const mongoose = require("mongoose");
const cors = require('cors');

require("dotenv/config");

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

app.use("/steps", stepRoutes);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
