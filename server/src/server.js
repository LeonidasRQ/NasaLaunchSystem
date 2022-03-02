const http = require("http");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const port = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}

startServer();
