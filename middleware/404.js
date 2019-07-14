'use strict';

module.exports = (request, response) => {
  response.status(404).send('404 Not Found');
};