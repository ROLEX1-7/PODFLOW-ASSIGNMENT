FROM node:18-alpine

#creating app directory
WORKDIR /apptwo

#For downloading app dependencies
COPY package*.json ./

#for other requirements downloads
RUN npm install

COPY . /apptwo

EXPOSE 5000

CMD ["npm" , "start"]