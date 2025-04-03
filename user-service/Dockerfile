FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8081

CMD [ "yarn", "start" ]