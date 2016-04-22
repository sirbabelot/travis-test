FROM node:5.11.0

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY ./ /usr/src/app

EXPOSE 8888
