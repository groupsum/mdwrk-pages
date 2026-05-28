# Semantic Components Demo

Demo app for the full fused semantic surface in `@mdwrk/lander-react`.

The app showcases:
- all `50` first-class structured-data-named exports
- visible semantic rendering through `@mdwrk/lander-react`
- built-in JSON-LD emission for every showcased component
- family-grouped examples for article, education, commerce, media, identity, and catalog surfaces
- per-type semantic CSS token files from `@mdwrk/pages-ui-tokens`

## Run locally

```bash
npm run build -w @mdwrk/example-semantic-components-demo
npm run dev -w @mdwrk/example-semantic-components-demo
```

Open `http://localhost:5173/` unless Vite selects a different local port.

## Build the container

```bash
docker compose -f examples/semantic-components-demo/compose.yaml up --build -d
docker compose -f examples/semantic-components-demo/compose.yaml ps
```

The compose contract intentionally does not publish host ports. For a local browser link from the same built image, run a separate published container:

```bash
docker run --rm -d --name mdwrk-semantic-components-demo-live -p 4191:80 mdwrk-semantic-components-demo:local
```

Health check:

```bash
curl http://localhost:4191/healthz
```
