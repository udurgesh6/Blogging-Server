const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const blogPosts = require("./routes/blogPosts.routes");
const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/api/blogs", blogPosts);

const DB_CONNECTION = process.env.DATABASE_URL;
const PORT = process.env.PORT || 6000;

mongoose
  .connect(
    "mongodb+srv://udurgesh6:Aerospace067@cluster0.ntbh1wg.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running @ : http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error(error));
