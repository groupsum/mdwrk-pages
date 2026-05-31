export * from "./version.js";
export * from "./generated-semantic-tokens.js";

export const MDWRK_PAGES_UI_ROOT_TOKEN_NAMES = [
  "mdwrk-font-ui",
  "mdwrk-font-head",
  "mdwrk-font-mono",
  "mdwrk-radius-sm",
  "mdwrk-radius-md",
  "mdwrk-radius-lg",
  "mdwrk-space-2",
  "mdwrk-space-3",
  "mdwrk-space-4",
  "mdwrk-space-6",
  "mdwrk-shadow-soft",
  "mdwrk-shadow-strong",
] as const;

export type MdwrkPagesUiRootTokenName = typeof MDWRK_PAGES_UI_ROOT_TOKEN_NAMES[number];
