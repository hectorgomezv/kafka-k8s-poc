require('dotenv').config();

const { ROLE, HTTP_PORT } = process.env;

const {
  kafka,
  server,
} = require('./infrastructure');

const {
  consumeMessages,
  sendMessage,
} = require('./domain/use-cases');

server.listen(HTTP_PORT || 3000);

(async () => {
  if (ROLE === 'producer') {
    return setInterval(async () => {
      await sendMessage(kafka);
    }, 20000);
  }

  return consumeMessages(kafka);
})();
