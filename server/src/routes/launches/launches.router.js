const express = require("express");
const { getAllLaunches } = require("./launches.controller");

const launchesRouter = express();

launchesRouter.get("/launches", getAllLaunches);

module.exports = launchesRouter;
