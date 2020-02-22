require('dotenv').config();
const { Kafka } = require('kafkajs');

const {
  BROKER_LIST,
  TOPIC_NAME,
} = process.env;

const parseBrokerList = (brokersList) => brokersList.split(';');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: parseBrokerList(BROKER_LIST),
});

(async () => {
  try {
    const producer = kafka.producer();
    await producer.connect();
    
    await producer.send({
      topic: TOPIC_NAME,
      messages: [{ value: 'Hello Kafka!' }],
    });
    
    await producer.disconnect();
  } catch (err) {
    console.error(err);
  }
})();
