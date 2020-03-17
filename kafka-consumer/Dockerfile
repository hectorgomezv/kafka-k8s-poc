FROM node:12-buster

WORKDIR /usr/src/kafka-k8s-poc-consumer

COPY ./src ./src
COPY package*.json ./

RUN npm ci --only=production

CMD ["node", "./src"]