# Frontend Dockerfile
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy the application code
COPY . .

# Build the app for production
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Serve the production build using an HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000", "--single"]
