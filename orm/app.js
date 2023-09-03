const express = require("express");
const app = express();

const mahasiswaRoutes = require("./routes/mahasiswa");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/mahasiswa", mahasiswaRoutes);

module.export = app;
