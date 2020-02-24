const { TOPIC_NAME } = process.env;

const sendMessage = async (kafka) => {
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
};

module.exports = sendMessage;
