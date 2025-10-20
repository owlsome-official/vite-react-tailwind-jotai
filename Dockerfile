FROM nginx:1.29.2-alpine3.22
RUN rm -rf /usr/share/nginx/html/*
COPY nginx/default.conf /etc/nginx/conf.d/
WORKDIR /usr/share/nginx/html
COPY ./dist .
COPY .env.local .
ENTRYPOINT ["/bin/sh", "-c", "export $(grep -v '^#' .env.local | xargs) && \"$@\"", "-s"]
CMD ["/bin/sh" , "-c" , "envsubst \"$(printf '${%s} ' $(cat .env.local | cut -d'=' -f1))\" < /default.template.conf > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
