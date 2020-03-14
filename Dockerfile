FROM node:12-buster

WORKDIR /usr/src/kafka-k8s-poc

COPY ./src ./src
COPY .env .env
COPY package*.json ./

RUN npm ci --only=production

CMD ["node", "src/kafka-producer"]