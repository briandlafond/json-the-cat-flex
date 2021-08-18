const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = function(breedName) {
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

fetchBreedDescription(breedName);

