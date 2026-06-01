import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PeopleAudienceInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface PeopleAudienceProps extends PeopleAudienceInput, GeneratedTypeUiProps<PeopleAudienceInput> {}

export function PeopleAudience({ value: legacyValue, description = "A set of characteristics belonging to people, e.g. who compose an item's target audience.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: PeopleAudienceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.PeopleAudienceStructuredData,
    defaultEyebrow: "Type",
    kind: "people-audience",
    shellClassName: "lander-semantic--people-audience",
    title: "PeopleAudience",
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
