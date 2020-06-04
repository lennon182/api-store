const mongoose = require("mongoose");

const dbConnect = mongoose
  .connect(process.env.DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log("DB is Connected");
  })
  .catch((e) => {
    console.log("Error un DB connection");
  });

module.exports = dbConnect;
