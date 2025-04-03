FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 8083

CMD [ "pnpm", "start" ]