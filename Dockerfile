FROM node:lts-alpine

WORKDIR /usr/src/app

COPY starterfiles/ ./
RUN npm install

CMD ["node", "index.js"]


