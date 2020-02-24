const { Kafka } = require('kafkajs');

const {
  KAFKA_K8S_POC_CLUSTER_SERVICE_HOST,
  KAFKA_K8S_POC_CLUSTER_SERVICE_PORT,
} = process.env;

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`${KAFKA_K8S_POC_CLUSTER_SERVICE_HOST}:${KAFKA_K8S_POC_CLUSTER_SERVICE_PORT}`],
});

module.exports = kafka;
