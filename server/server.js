const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const header_middleware = require("./middlewares/header")

// get driver connection
const dbo = require("./db/conn");
app.use(cors());
app.use(express.json());
app.use(header_middleware)
app.use(require("./routes/record"));

 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});