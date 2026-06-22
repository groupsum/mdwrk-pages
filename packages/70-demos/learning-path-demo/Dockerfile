FROM nginx:1.27-alpine

COPY packages/70-demos/learning-path-demo/nginx.conf /etc/nginx/conf.d/default.conf
COPY packages/70-demos/learning-path-demo/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
