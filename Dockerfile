FROM oven/bun:alpine AS builder

RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --no-cache

COPY . .
RUN bun run build

FROM nginx:1.29.3-alpine AS runtime

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
