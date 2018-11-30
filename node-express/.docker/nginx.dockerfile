FROM nginx:latest
LABEL maintainer="oscar.megia@gmail.com"
COPY ./.docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80