require("dotenv").config();
require("./src/database");
const express = require("express");
const helmet = require("helmet");

const app = express();
const router = require("./src/router.js");

app.use(helmet());
app.use(express.json());

app.use("/", router);

app.listen(process.env.PORT);
