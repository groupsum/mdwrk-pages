import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CmnsGeGeopoliticalEntityInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface CmnsGeGeopoliticalEntityProps extends CmnsGeGeopoliticalEntityInput, GeneratedTypeUiProps<CmnsGeGeopoliticalEntityInput> {}

export function CmnsGeGeopoliticalEntity({ value: legacyValue, description = "", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: CmnsGeGeopoliticalEntityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.CmnsGeGeopoliticalEntityStructuredData,
    defaultEyebrow: "Type",
    kind: "cmns-ge-geopolitical-entity",
    shellClassName: "lander-semantic--cmns-ge-geopolitical-entity",
    title: "cmns-ge_GeopoliticalEntity",
    value,
    description,
    examples,
    body,
    className,
    emitStructuredData,
    structuredDataOverrides,
    viewModel,
  });
}
