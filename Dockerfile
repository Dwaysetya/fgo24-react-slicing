FROM node:lts-alpine

WORKDIR /workspace

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


# RUN npm install serve
# CMD ["npx", "serve","dist/", "-l","tcp://0.0.0.0:3000"]

FROM nginx:latest

COPY --from=0 /workspace/dist/ /usr/share/nginx/html/
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80