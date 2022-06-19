FROM node:lts-alpine3.16 as builder

COPY . ./

RUN mv .env.docker .env

RUN npm install --silent

RUN npm install react-scripts -g --silent

RUN npm run build

FROM nginx:1.17.1-alpine as deploy

COPY --from=builder /build /usr/share/nginx/html

EXPOSE 80