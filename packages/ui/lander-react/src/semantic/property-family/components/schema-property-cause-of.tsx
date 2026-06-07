import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CauseOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCauseOfProps extends CauseOfPropertyInput, GeneratedPropertyUiProps<CauseOfPropertyInput> {}

export function SchemaPropertyCauseOf({ value: legacyValue, description = "The condition, complication, symptom, sign, etc. caused.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCauseOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CauseOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-cause-of",
    shellClassName: "lander-semantic--schema-property-cause-of",
    title: "causeOf",
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

(SchemaPropertyCauseOf as typeof SchemaPropertyCauseOf & { toStructuredData: (props: SchemaPropertyCauseOfProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
