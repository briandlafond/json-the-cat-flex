const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log('statusCode:', response && response.statusCode);
      console.log('Error, try again.');
    } else {
      const data = JSON.parse(body);
      const description = data[0].description;
      console.log(description);
    }
  });
};


module.exports = { fetchBreedDescription };

