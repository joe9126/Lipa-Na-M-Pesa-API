const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    length: 10,
  },
  amount: {
    type: Number,
    required: true,
  },
});
