import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import http from "http";
import { mondayuLogger } from "mondayu-logger"; // import your logger

const apiKey = "<<your api key>>";
const weatherInitializer = new AsyncWeather();
const weatherAPI = await weatherInitializer;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  // add usage of weatherAPI here

  // log the temp

  res.end(
    JSON.stringify({
      data: 'hello mondayU',
    })
  );
});

server.listen(8000);
// log that the service has started