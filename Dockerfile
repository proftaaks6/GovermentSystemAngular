# Get latest nginx image
FROM nginx
# Copy build into nginx image
COPY ./dist/GovermentSystemAngular/ /var/www
# Copy nginx config file to default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Run server
# -g daemon off; is used so Docker can track the process properly,
# otherwise the container will stop immediately after starting
CMD ["nginx", "-c", "/etc/nginx/conf.d/default.conf",  "-g", "daemon off;"]
