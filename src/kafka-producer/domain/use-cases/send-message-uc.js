const { TOPIC_NAME = 'kafka-k8s-poc-test' } = process.env;

const sendMessage = async (kafka) => {
  const producer = kafka.producer();
  await producer.connect();

  const message = {
    topic: TOPIC_NAME,
    messages: [{ value: 'Hello Kafka!' }],
  };

  console.log(message);
  await producer.send(message);

  return producer.disconnect();
};

module.exports = sendMessage;
