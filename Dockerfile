FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG CONFIGURATION
RUN npm run build --configuration=${CONFIGURATION}

FROM nginx:latest
COPY --from=build /app/dist/hotel-reservation-web-client/ /usr/share/nginx/html
