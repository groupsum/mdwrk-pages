import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PersonInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface PersonProps extends PersonInput, GeneratedTypeUiProps<PersonInput> {}

export function Person({ value: legacyValue, description = "A person (alive, dead, undead, or fictional).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: PersonProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.PersonStructuredData,
    defaultEyebrow: "Type",
    kind: "person",
    shellClassName: "lander-semantic--person",
    title: "Person",
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
