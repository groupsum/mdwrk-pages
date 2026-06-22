import type React from "react";

export type PrimitiveTone = "neutral" | "accent" | "success" | "warning" | "danger";
export type PrimitiveSize = "sm" | "md" | "lg";
export type PrimitiveVariant = "primary" | "secondary" | "ghost";

export interface PrimitiveBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export function joinClassNames(...values: Array<string | undefined | false | null>): string | undefined {
  const tokens: string[] = [];
  const seen = new Set<string>();

  for (const value of values) {
    if (!value) continue;
    for (const token of value.split(/\s+/u)) {
      if (!token || seen.has(token)) continue;
      seen.add(token);
      tokens.push(token);
    }
  }

  return tokens.length ? tokens.join(" ") : undefined;
}

export function primitiveClass(
  primitive: string,
  className?: string,
  ...modifiers: Array<string | undefined | false | null>
) {
  return joinClassNames(
    "mdwrk-primitive",
    `mdwrk-primitive--${primitive}`,
    ...modifiers.map((modifier) => modifier && `mdwrk-primitive--${primitive}-${modifier}`),
    className,
  );
}
