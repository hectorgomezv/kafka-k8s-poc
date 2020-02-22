#!/bin/bash

minikube start --vm-driver=docker && \
helm repo add bitnami https://charts.bitnami.com/bitnami && \
helm install kafka-k8s-poc-cluster bitnami/kafka -f ./ci/values/values.yaml
