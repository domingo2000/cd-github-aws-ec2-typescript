FROM node:16-alpine

# Create app directory
WORKDIR /usr

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./
COPY build ./build

# See the current files in the docker container
RUN ls -a

COPY . .

RUN yarn install --only=production

EXPOSE 3000
CMD [ "sh", "-c", "yarn start" ]
