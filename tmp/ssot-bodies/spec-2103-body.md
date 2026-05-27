# Scope
This SPEC governs the canonical education template family, companion study surfaces, and their schema-backed authored payloads.

# Requirements
The canonical education family must contain exactly five core reusable templates:
- `education.learning-path`
- `education.course`
- `education.module`
- `education.quiz`
- `education.course-test`

The education domain bundle may additionally include companion study surfaces such as `education.flashcards` when those pages remain schema-backed and fit within the existing template ownership split.

The learning path template must own child-course topology. The course template must own child-module topology and an optional linked course-test child. The module template must remain terminal for child topology and may expose navigation to related quiz or flashcard study pages through bundle-defined relationships. Quiz and course-test pages must be terminal templates.

Each governed education template must bind to an exported JSON Schema asset that validates page-local authored payload data. The course test replaces the older assessment surface in the canonical core family.

The starter preset must instantiate a five-entity graph that compiles as learning path -> course -> module -> quiz, plus course -> course test.

Structured-data defaults must remain within the existing `mdwrk-pages` ownership split:
- learning path defaults to `ItemList`,
- course defaults to `Course`,
- flashcards defaults to `LearningResource`,
- module defaults to `TechArticle`, and
- quiz plus course-test default to `Quiz`.

# Verification
Tests must prove the canonical education bundle ids, the five-entity preset topology, authored-data schema validation, and JSON-LD emission for the education pages and companion study surfaces.
