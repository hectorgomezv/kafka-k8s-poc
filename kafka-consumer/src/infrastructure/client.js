const WebSocket = require('ws');

const { WS_PORT } = process.env;

const ws = new WebSocket(`ws://localhost:${WS_PORT}`);

ws.on('message', data => console.log(data));
