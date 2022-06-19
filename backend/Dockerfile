FROM node:lts-alpine3.16

COPY ./* ./

EXPOSE 8080

RUN mv .env.docker .env

RUN npm install

ENTRYPOINT npm start