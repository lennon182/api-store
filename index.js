require("dotenv").config();

const express = require("express");
const app = express();

require("./db/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require("./routes/index.routes");
app.use("/API/v1", routes);
app.use("/", (req, resp) => {
  resp.send(
    `
      <div style='margin: 0 auto, width: 90%; text-align: center;'>
        <h1>Welcome to API Main Page</h1>
        <h2>
          <a href="/API/v1">got to API</a>
        </h2>
      </div>

    `
  );
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT} `);
});
