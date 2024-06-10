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

FROM base as runner
RUN npm i -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["serve", "-s", "dist", "-p", "3000"]