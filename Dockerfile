FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 8888
CMD node server.js