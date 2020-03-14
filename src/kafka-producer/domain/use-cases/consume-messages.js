const { TOPIC_NAME = 'kafka-k8s-poc-test' } = process.env;

module.exports = (kafka) => {
  const consumer = kafka.consumer({ groupId: 'my-group' });
  consumer.subscribe({ topic: TOPIC_NAME });

  return consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        key: message.key.toString(),
        value: message.value.toString(),
        headers: message.headers,
      });
    },
  });
};
