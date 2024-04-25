# Use an official Node runtime as a parent image
FROM node:21

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "80"]

EXPOSE 5173
