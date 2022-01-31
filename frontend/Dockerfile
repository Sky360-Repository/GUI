
FROM node:17.4.0-alpine

WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install
RUN npm run start
COPY . ./
EXPOSE 3000
