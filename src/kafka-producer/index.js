require('dotenv').config();

const { HTTP_PORT } = process.env;

const {
  kafka,
  server,
} = require('./infrastructure');

const { sendMessage } = require('./domain/use-cases');

server.listen(HTTP_PORT);

setInterval(async () => {
  await sendMessage(kafka);
}, 20000);
