FROM node:slim
ENV NODE_ENV development
WORKDIR /usr/src/app
ADD package.json .
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 9229
CMD ["npm", "run", "start:dev"]