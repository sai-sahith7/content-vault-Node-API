const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  ownerEmail: {
    type: String,
    required: [true, "Email is required"],
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const Collections = mongoose.model("collections", collectionSchema);
module.exports = Collections;
