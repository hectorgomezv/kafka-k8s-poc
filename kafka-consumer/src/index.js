require('dotenv').config();

const {
  kafka,
  server,
} = require('./infrastructure');

const { consumeMessages } = require('./domain/use-cases');

const { HTTP_PORT } = process.env;

server.listen(HTTP_PORT || 3000);

(() => consumeMessages(kafka))();
