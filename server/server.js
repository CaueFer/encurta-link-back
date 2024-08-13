const express = require("express");
const cors = require("cors");
const urlRouter = require("./routes/url.router");
const { connectMongoDB } = require("./utils/connectdb");

require("dotenv").config();

const PORT = 8001;
const app = express();

connectMongoDB().then(() => {
  console.log("mongodb connected.");
});

app.use(cors());
app.use(express.json())
app.use("/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
