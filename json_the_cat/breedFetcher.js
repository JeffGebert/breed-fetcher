const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, { json: true }, (err, res, body) => {
    if (err) {
      callback(err);
    } else if (body.length === 0) {
      callback("breed not found");
    } else {
      callback(err, body[0].description);
    }
  

  });




};

module.exports = {fetchBreedDescription};

