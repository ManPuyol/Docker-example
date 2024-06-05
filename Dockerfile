# Use the official Node.js image as the base image
FROM node:latest

# Create a directory for the app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install && \ 
    npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the app
# ENTRYPOINT [ "nodemon", "index.js" ]
CMD ["nodemon", "index.js"]
