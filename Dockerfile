# Stage 1: Build the React application
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the build files with Nginx
FROM nginx:1.19

# Copy the build files from the first stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port Nginx is configured to use
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
