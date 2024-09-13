FROM node

WORKDIR /usr/prg
COPY . /usr/prg

RUN npm install
RUN npm run build

EXPOSE 8000
CMD ["npm", "start"]
