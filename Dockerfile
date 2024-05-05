FROM node:20.11.0
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build
## this is stage two , where the app actually runs
FROM node:20.11.0
WORKDIR /usr
COPY package.json ./
RUN npm install --only=production
COPY --from=0 /usr/dist .
RUN npm install pm2 -g
EXPOSE 3005
CMD ["pm2-runtime","server.js"]