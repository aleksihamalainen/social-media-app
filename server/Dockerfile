FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run copy-build

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]