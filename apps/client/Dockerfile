FROM node:21-alpine as base
RUN npm i -g pnpm

FROM base as deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base as builder
WORKDIR /app
RUN ls
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm build

FROM builder as production
EXPOSE 4173
CMD ["pnpm", "start"]