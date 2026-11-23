FROM node:20.19-alpine AS build

WORKDIR /workspace
COPY . .
RUN npm install --ignore-scripts --include=optional
RUN npm install --ignore-scripts --include=optional -w @mdwrk/example-semantic-components-demo
RUN npm run build:packages
RUN npm run build -w @mdwrk/example-semantic-components-demo

FROM nginx:1.30.7-alpine@sha256:caf4e1e032a20f9c3c5e28fc7f25ffd768ad8677b4975c54193075997b3a97e3

COPY packages/70-demos/semantic-components-demo/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /workspace/packages/70-demos/semantic-components-demo/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
