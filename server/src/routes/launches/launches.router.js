const express = require("express");
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
} = require("./launches.controller");

const launchesRouter = express();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);

module.exports = launchesRouter;
