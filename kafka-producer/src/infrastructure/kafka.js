const { Kafka } = require('kafkajs');

const {
  KAFKA_K8S_POC_CLUSTER_SERVICE_HOST,
  KAFKA_K8S_POC_CLUSTER_SERVICE_PORT,
} = process.env;

const options = {
  clientId: 'my-app',
  brokers: [`${KAFKA_K8S_POC_CLUSTER_SERVICE_HOST}:${KAFKA_K8S_POC_CLUSTER_SERVICE_PORT}`],
};

console.log(options);

const kafka = new Kafka(options);

module.exports = kafka;
