FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
COPY pm2.json ./
RUN npm install
RUN npm install pm2 -g
COPY . .
EXPOSE 8100
CMD ["pm2-runtime", "start", "pm2.json"]

