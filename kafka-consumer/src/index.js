require('dotenv').config();

const {
  kafka,
  server,
} = require('./infrastructure');

const { consumeMessages } = require('./domain/use-cases');

server.on('connection', (ws) => {
  ws.send('Hello from server');
  ws.on('message', message => ws.send(`received ${message}`));
});

(() => consumeMessages(kafka, server))();
