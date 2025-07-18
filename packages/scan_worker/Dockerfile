FROM node:alpine/node

WORKDIR /app

COPY package*.json ./ 

RUN npm install 

COPY . . 

CMD ["node","dist/worker.js"]