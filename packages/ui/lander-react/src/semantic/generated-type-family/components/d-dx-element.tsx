import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DDxElementInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface DDxElementProps extends DDxElementInput, GeneratedTypeUiProps<DDxElementInput> {}

export function DDxElement({ value: legacyValue, description = "An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: DDxElementProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.DDxElementStructuredData,
    defaultEyebrow: "Type",
    kind: "d-dx-element",
    shellClassName: "lander-semantic--d-dx-element",
    title: "DDxElement",
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
