FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG CONFIGURATION=development
RUN npm run build -- --configuration=${CONFIGURATION}

FROM nginx:latest
COPY --from=build /app/dist/hotel-reservation-web-client/browser /usr/share/nginx/html
