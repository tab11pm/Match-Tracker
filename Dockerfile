# Dockerfile for Vite frontend
FROM node:20.11.1-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5174

CMD ["npm", "run", "preview"]

