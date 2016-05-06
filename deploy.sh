#!/bin/bash
docker rm -f morgtest
docker pull bablot/travis-test
docker run -d -p 80:8888 --name morgtest bablot/travis-test