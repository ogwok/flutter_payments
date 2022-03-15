const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
