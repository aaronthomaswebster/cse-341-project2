const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./data/database");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, z-key"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/", require("./routes"));

process.on("uncaughtException", (err) => {
  console.log(process.stderr.fd, "Uncaught Exception: ", err);
});

mongodb.initDb((err) => {
  if (err) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
