const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdAt: {
      type: Date,
      default: Date.now,
      index: { expires: '24h' },
    },
  },
  { timestamp: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;