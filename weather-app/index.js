import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import http from "http";
// import your own logger

// step 1: install lib and print temp to console
const apiKey = "421c153fb808b64265631fd1e550a395"
const weatherInitializer = new AsyncWeather();
const weatherAPI = await weatherInitializer;
weatherAPI.setApiKey(apiKey)
weatherAPI.setCityId(293397)
weatherAPI.setCity('tel aviv')
const temp = await weatherAPI.getTemperature();
console.log("temp",temp)


// step 2: server
// create your server here from http module
// example in the slides or here: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: temp
    }));
  });
  
  
  server.listen(8000);
// start your server

// step 3: install your logger and log temp and server start
// log that the service has started