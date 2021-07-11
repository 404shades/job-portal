FROM node:latest
WORKDIR /usr/job-portal-services
COPY package.json .
RUN npm install
RUN npm install pm2 -g
COPY . .
CMD ["pm2-runtime","app.js"]