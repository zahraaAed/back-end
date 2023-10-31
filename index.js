require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const categoriesRoutes = require("./routes/categories");

const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/categories/", categoriesRoutes);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(PORT, () => {
      console.log("connected to db and listening on port ",PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
