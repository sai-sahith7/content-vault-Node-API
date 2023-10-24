const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  collectionId: {
    type: String,
    required: [true, "Collection ID is required"],
  },
  url: {
    type: String,
    required: [true, "URL is required"],
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    required: [true, "Type is required"],
    enum: ["X", "YouTube", "Instagram", "Web"],
  },
});

const Items = mongoose.model("items", itemSchema);
module.exports = Items;
