FROM node:alpine3.16
RUN mkdir /app
WORKDIR /app
# COPY node_modules/ ./
COPY package.json ./
RUN npm install
COPY . .

# dev with nodemon
# RUN npm install nodemon && npm install

CMD npm run dev
# CMD npm run dev