# @mdwrk/pages-ui-tokens

**Repo-local CSS tokens for MdWrk Pages**

This package owns the CSS token surfaces that MdWrk Pages UI packages consume, including the root UI token baseline and the full per-type fused semantic token surface.

## What

- Root CSS token baseline for MdWrk Pages UI.
- One semantic token CSS file per fused structured-data export in `@mdwrk/lander-react`.
  Representative examples:
  - `semantic-article.css`
  - `semantic-faq-page.css`
  - `semantic-product-group.css`
  - `semantic-qa-page.css`
  - `semantic-software-application.css`
  - `semantic-vacation-rental.css`
- The current package surface covers all `58` supported structured-data kinds.

## Usage

Import the token files from your consuming package or app:

```css
@import url("@mdwrk/pages-ui-tokens/styles/root.css");
@import url("@mdwrk/pages-ui-tokens/styles/semantic-article.css");
@import url("@mdwrk/pages-ui-tokens/styles/semantic-product-group.css");
```
