FROM nginx:1.27-alpine

COPY examples/subscription-store-demo/nginx.conf /etc/nginx/conf.d/default.conf
COPY examples/subscription-store-demo/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
