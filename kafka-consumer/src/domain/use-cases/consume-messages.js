const WebSocket = require('ws');

const { TOPIC_NAME = 'kafka-k8s-poc-test' } = process.env;

/**
 * Broadcasts a data message across all connected clients.
 * @param {WebSocketServer} server websocket server instance.
 * @param {Object} message data message to be sent.
 */
const broadcast = async (server, message) => server
  .clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });

/**
 * Awaits for messages coming from Kafka client and processes them.
 * @param {KafkaClient} kafka kafka client.
 * @param {WebSocketServer} server websocket server instance.
 */
const listen = (kafka, server) => {
  const consumer = kafka.consumer({ groupId: 'my-group' });
  consumer.subscribe({ topic: TOPIC_NAME });

  return consumer.run({
    eachMessage: async message => broadcast(server, message),
  });
};

module.exports = listen;
