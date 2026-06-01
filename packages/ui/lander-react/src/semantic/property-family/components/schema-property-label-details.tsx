import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LabelDetailsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLabelDetailsProps extends LabelDetailsPropertyInput, GeneratedPropertyUiProps<LabelDetailsPropertyInput> {}

export function SchemaPropertyLabelDetails({ value: legacyValue, description = "Link to the drug's label details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLabelDetailsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LabelDetailsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-label-details",
    shellClassName: "lander-semantic--schema-property-label-details",
    title: "labelDetails",
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
