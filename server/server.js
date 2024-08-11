const express = require("express");
const cors = require("cors");
require("dotenv").config();
const urlRouter = require('./routes/url.router')

const app = express();
app.use(cors());
app.use('/url', urlRouter);

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
