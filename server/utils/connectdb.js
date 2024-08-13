const mongoose = require("mongoose");
require("dotenv").config();

async function connectMongoDB() {
  const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

  return mongoose.connect(process.env.MONGOURL, clientOptions);
}

module.exports = {
  connectMongoDB,
};
