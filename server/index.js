const express = require('express');
const _ = require('lodash');
const app = express();
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  const name = req.query.name
  // Create a template from user input
  const compiled = _.template("Hello <%- name %>.");
  res.status(200).send(compiled({ name }));
});

module.exports = app;
