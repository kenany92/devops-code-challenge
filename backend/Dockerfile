FROM node:lts-alpine3.16

COPY ./* ./

EXPOSE 8080

RUN ['npm', "install"]

ENTRYPOINT ['npm', "start"]