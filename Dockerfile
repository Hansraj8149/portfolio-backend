# Use official Node.js image as base
FROM node:20.18.1-slim


# Set working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the entire Strapi project
COPY . .

# Expose the default Strapi port
EXPOSE 1337

# Set environment variables for production
ENV NODE_ENV=production

# Build the Strapi admin panel
RUN npm run  build

# Start Strapi in production mode
CMD ["npm", "start"]
