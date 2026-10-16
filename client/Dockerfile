FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY index.html ./
COPY src ./src
RUN mkdir -p dist && npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/index.html /usr/share/nginx/html/index.html
COPY --from=build /app/dist/assets.js /usr/share/nginx/html/assets.js
EXPOSE 80
