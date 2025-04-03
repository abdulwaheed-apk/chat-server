FROM node:18-alpine

WORKDIR /usr/src/app

# Install PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependencies files
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 8081

CMD [ "pnpm", "start" ]