FROM node:21-alpine as base
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm

FROM base as prod-deps
WORKDIR /app
RUN pnpm install --production --frozen-lockfile

FROM prod-deps as deps
WORKDIR /app
RUN pnpm install --frozeen-lockfile

FROM deps as builder
WORKDIR /app
RUN ls
COPY . . 
RUN pnpm build

FROM builder as production
EXPOSE 4173
CMD ["pnpm", "start"]