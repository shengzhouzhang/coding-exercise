FROM node:10.14.2

run mkdir app
WORKDIR app
ADD . .
run yarn install

ENTRYPOINT ["yarn"]