# Use the Node 20.11 image as the base image
FROM node:20.11

# Set the working directory
WORKDIR /

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Add the app
COPY . ./

# Start the app
CMD ["npm", "start"]
