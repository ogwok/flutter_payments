const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  image: {
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
