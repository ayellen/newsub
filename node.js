    const https = require('https');
    https.get(
      "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs",
      { headers: { "x-api-key": 'AJiLnqwnUL52tXS944SsG9ml8xVPkSxG1qn5Vw8u'}
      },
      (resp) => {
        resp.on('data', (chunk) => {
          console.log("Receiving Data");
        });
        resp.on('end', () => {
          console.log("Finished receiving data");
        });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
