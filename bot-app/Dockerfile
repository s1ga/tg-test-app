FROM node:18-alpine
WORKDIR /bot-app
COPY package*.json ./
RUN npm ci
COPY . .
ENV PORT=3000
EXPOSE $PORT
CMD [ "npm run", "start" ]