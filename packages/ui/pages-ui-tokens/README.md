# @mdwrk/pages-ui-tokens

**Repo-local CSS tokens for MdWrk Pages**

This package owns the CSS token surfaces that MdWrk Pages UI packages consume, including root UI tokens and frontier semantic component token files.

## What

- Root CSS token baseline for MdWrk Pages UI.
- One semantic token CSS file per frontier fused component:
  - `semantic-article.css`
  - `semantic-product.css`
  - `semantic-course.css`
  - `semantic-quiz.css`

## Usage

Import the token files from your consuming package or app:

```css
@import url("@mdwrk/pages-ui-tokens/styles/root.css");
@import url("@mdwrk/pages-ui-tokens/styles/semantic-article.css");
```
