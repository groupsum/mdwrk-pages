import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PossibleComplicationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPossibleComplicationProps extends PossibleComplicationPropertyInput, GeneratedPropertyUiProps<PossibleComplicationPropertyInput> {}

export function SchemaPropertyPossibleComplication({ value: legacyValue, description = "A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPossibleComplicationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PossibleComplicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-possible-complication",
    shellClassName: "lander-semantic--schema-property-possible-complication",
    title: "possibleComplication",
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
