FROM node:21-alpine as base
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm

FROM base as prod-deps
WORKDIR /app
RUN pnpm install --prod --frozen-lockfile

FROM prod-deps as deps
WORKDIR /app
RUN pnpm install --frozen-lockfile

FROM deps as builder
WORKDIR /app
COPY . .
RUN pnpm build

FROM prod-deps as runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/main"]