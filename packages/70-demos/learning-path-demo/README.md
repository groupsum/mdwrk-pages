# Learning Path Demo

Dockerized MdWrk Pages demo site for JSON Schema-backed education templates.

This example renders:

- `education.learning-path`
- `education.course`
- `education.module`
- `education.quiz`
- `education.course-test`

It uses:

- `@mdwrk/lander-page-template-presets`
- `@mdwrk/lander-page-templates`
- `@mdwrk/lander-react`
- `@mdwrk/lander-react-structured-data`
- `@mdwrk/lander-content-contract`

Run locally:

```bash
npm run dev -w @mdwrk/example-learning-path-demo
```

Build Docker image:

```bash
docker compose -f packages/70-demos/learning-path-demo/compose.yaml up --build
```
