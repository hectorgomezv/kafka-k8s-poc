#!/bin/bash

helm repo add bitnami https://charts.bitnami.com/bitnami && \
helm install --name kafka-k8s-poc-cluster bitnami/kafka -f ./ci/values/values.yaml && \
kubectl apply -f ./ci/kafka-k8s-poc/producer.yaml && \
kubectl apply -f ./ci/kafka-k8s-poc/consumer.yaml
