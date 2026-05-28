FROM node:20.19-alpine AS build

WORKDIR /workspace
COPY . .
RUN npm install --ignore-scripts --include=optional
RUN npm install --ignore-scripts --include=optional -w @mdwrk/example-semantic-components-demo
RUN npm run build:packages
RUN npm run build -w @mdwrk/example-semantic-components-demo

FROM nginx:1.27-alpine

COPY examples/semantic-components-demo/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /workspace/examples/semantic-components-demo/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
