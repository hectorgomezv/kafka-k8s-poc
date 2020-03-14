require('dotenv').config();

const { HTTP_PORT } = process.env;

const {
  kafka,
  server,
} = require('./infrastructure');

const { sendMessage } = require('./domain/use-cases');

server.listen(HTTP_PORT || 3000);

setInterval(async () => {
  await sendMessage(kafka);
}, 20000);
