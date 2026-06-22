FROM nginx:1.27-alpine

COPY packages/70-demos/subscription-store-demo/nginx.conf /etc/nginx/conf.d/default.conf
COPY packages/70-demos/subscription-store-demo/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
