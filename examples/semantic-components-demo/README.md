# Semantic Components Demo

Demo app for the fused semantic surface in `@mdwrk/lander-react`.

The app now has three modes and exposes the full generated surface without collapsing everything into one giant page:
- `Highlights`
  - curated, high-signal examples across the authored runtime families
- `Governed Core`
  - the current first-class authored semantic runtime grouped by family
- `Generated Surface`
  - the full generated artifact explorer for `types`, `properties`, `enumerations`, and `datatypes`

The demo derives its counts and generated-surface coverage from the same generated metadata used by the repo truth matrices. It no longer assumes a fixed `58`-export snapshot.

## Run locally

```bash
npm run build -w @mdwrk/example-semantic-components-demo
npm run dev -w @mdwrk/example-semantic-components-demo
```

Open `http://localhost:5173/` unless Vite selects a different local port.

Useful QA states:
- `?mode=highlights`
- `?mode=governed-core`
- `?mode=generated-surface&kind=type`
- `?mode=generated-surface&kind=property`
- `?mode=generated-surface&kind=enumeration`
- `?mode=generated-surface&kind=datatype`

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
