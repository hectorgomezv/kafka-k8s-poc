const WebSocket = require('ws');

const { WS_PORT } = process.env;

const wss = new WebSocket.Server({ port: WS_PORT });

module.exports = wss;
