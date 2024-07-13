FROM node:21-alpine as base
RUN apk update && apk add bash git npm
WORKDIR /app
COPY package.json tsconfig.json package-lock.json  ./
EXPOSE 3000
RUN npm install

FROM base as builder
WORKDIR /app
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build