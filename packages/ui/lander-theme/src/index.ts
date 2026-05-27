export * from "./version.js";

export const MDWRK_PAGES_THEME_EXTENSION_TOKEN_NAMES = [
  "mdp-nav-height",
  "mdp-page-max-width",
  "mdp-section-gap",
  "mdp-card-padding",
  "mdp-card-radius",
  "mdp-hero-padding-block-start",
  "mdp-hero-padding-block-end",
  "mdp-button-radius",
] as const;

export type MdwrkPagesThemeExtensionTokenName = typeof MDWRK_PAGES_THEME_EXTENSION_TOKEN_NAMES[number];

export interface LanderThemeTokens {
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  panel: string;
  border: string;
  radius: string;
  maxWidth: string;
}

export type MdwrkPagesThemeExtensionTokens = Readonly<Record<MdwrkPagesThemeExtensionTokenName, string>>;

export const defaultLightLanderTokens: LanderThemeTokens = {
  background: "#ffffff",
  foreground: "#111111",
  muted: "#5f6368",
  accent: "#2454d6",
  panel: "#f6f7f9",
  border: "#d9dde4",
  radius: "8px",
  maxWidth: "1120px",
};

export const defaultDarkLanderTokens: LanderThemeTokens = {
  background: "#101214",
  foreground: "#f4f6f8",
  muted: "#aeb6c2",
  accent: "#7aa2ff",
  panel: "#191d22",
  border: "#303741",
  radius: "8px",
  maxWidth: "1120px",
};

export const defaultPagesThemeExtensionTokens: MdwrkPagesThemeExtensionTokens = {
  "mdp-nav-height": "4.75rem",
  "mdp-page-max-width": "1280px",
  "mdp-section-gap": "1.5rem",
  "mdp-card-padding": "1.5rem",
  "mdp-card-radius": "1rem",
  "mdp-hero-padding-block-start": "8rem",
  "mdp-hero-padding-block-end": "5rem",
  "mdp-button-radius": "0.5rem",
};

export type LanderCompositedMotionProperty = "opacity" | "transform";

export interface LanderFirstViewportMotionPolicy {
  allowedAnimatedProperties: readonly LanderCompositedMotionProperty[];
  reducedMotionRequired: boolean;
}

export const defaultFirstViewportMotionPolicy: LanderFirstViewportMotionPolicy = {
  allowedAnimatedProperties: ["opacity", "transform"],
  reducedMotionRequired: true,
};

export function isCompositedLanderMotionProperty(
  property: string,
): property is LanderCompositedMotionProperty {
  return defaultFirstViewportMotionPolicy.allowedAnimatedProperties.includes(
    property.trim().toLowerCase() as LanderCompositedMotionProperty,
  );
}
