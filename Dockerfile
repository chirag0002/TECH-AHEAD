FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apt-get update && apt-get install -y \
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 9000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
