const request = require('request');
let breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, { json: true }, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  if (body.length === 0) {
    return console.log("breed not found");
  }
  console.log(body[0].description);

});

