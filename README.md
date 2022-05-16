# workshop-5
Fork this repo

## Logger module

Create logger module as a new package that accepts a log and appends the log to a log file (creates one if it doesn’t exist)

1. npm init
1. create logger, [like this](https://melvingeorge.me/blog/save-logs-to-files-nodejs) only stdout is needed (logs)
1. use console options: [{'flags': 'a'} to append](https://nodejs.org/api/fs.html#:~:text=%27a%27%3A%20Open%20file%20for%20appending.%20The%20file%20is%20created%20if%20it%20does%20not%20exist.)
1. export your logger function
1. update package.json main if your script isn't index.js
1. npm publish 🚀 
    - hint, you'll need to change the package name

## Weather App

Create new app for fetching weather service data

1. Create a GET handler with native http module.
1. Use open weather [api client](https://www.npmjs.com/package/@cicciosgamino/openweather-apis) with [this service](https://openweathermap.org/api)  (sign up required) to get temp at city ID 293397 (tel aviv)
1. GET ‘localhost:8000’ should return the current weather at Tel Aviv (or some other place) in some format, not important;
1. check this with your browser or with `curl localhost:8000` or with postman
1. Install your own published logger 
1. Log the fetched temp of every request made
1. Bonuses: 
    -   Link your logger to your local package
    -   (only after finishing): return data in a 1, nice html format 
    - Accept query params for which city id or location to check the weather for.
