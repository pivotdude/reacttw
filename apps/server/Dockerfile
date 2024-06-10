FROM node:21-alpine as base
RUN npm i -g pnpm

FROM base as deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base as prod-deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

FROM base as builder
WORKDIR /app
RUN ls
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm build

FROM base as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/main"]