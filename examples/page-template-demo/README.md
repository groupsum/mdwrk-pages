# Page Template Demo

Containerized demo app for `@mdwrk/page-template-demo-content-pack`.

The app showcases:
- preset-authored page-template graphs
- Markdown-authored page-template graphs
- emitted `PageSpec` output rendered with `@mdwrk/lander-react`
- page-level JSON-LD emitted with `@mdwrk/lander-react-structured-data`
- structured-data page links resolved from template `schemaLinks`

The browser demo highlights how Markdown frontmatter links like `support` and `legal` are compiled into page edges and then surfaced as structured-data-linked pages on the `SoftwareApplication` schema for the home page.

## Run locally

```bash
npm run build -w @mdwrk/example-page-template-demo
docker build -f examples/page-template-demo/Dockerfile -t mdwrk-page-template-demo .
docker run --rm -p 4189:80 mdwrk-page-template-demo
```

Open `http://localhost:4189/demo/` for the preset-authored mode and `http://localhost:4189/demo-markdown/` for the Markdown-authored mode.

## Run with Docker Compose

```bash
docker compose -f examples/page-template-demo/compose.yaml up --build -d
```

Health check:

```bash
curl http://localhost:4189/healthz
```
