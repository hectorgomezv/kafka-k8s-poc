require('dotenv').config();

const {
  kafka,
  server,
} = require('./infrastructure');

const { sendMessage } = require('./domain/use-cases');

const { HTTP_PORT } = process.env;

server.listen(HTTP_PORT || 3000);

(() => setInterval(async () => sendMessage(kafka), 10000))();
