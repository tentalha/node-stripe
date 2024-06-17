const express = require("express");
const { SECRET } = require("./envConfig");
var cors = require("cors");

const stripe = require("stripe")(SECRET);
const connectDatabase = require("./dbConfig");
const router = require("./routes/rootRoutes");

connectDatabase();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", router);

app.use((error, req, res, next) => {
  res.status(500).json({
    success: false,
    error: error?.message,
  });
});

app.listen(8000, () => console.log("Server running on PORT 8000!"));
