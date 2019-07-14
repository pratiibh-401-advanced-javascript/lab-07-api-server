'use strict';

module.exports = (err,request, response) => {
  response.status(500).send(err);
};