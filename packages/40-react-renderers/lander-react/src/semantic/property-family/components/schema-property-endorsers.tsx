import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EndorsersPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEndorsersProps extends EndorsersPropertyInput, GeneratedPropertyUiProps<EndorsersPropertyInput> {}

export function SchemaPropertyEndorsers({ value: legacyValue, description = "People or organizations that endorse the plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEndorsersProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EndorsersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-endorsers",
    shellClassName: "lander-semantic--schema-property-endorsers",
    title: "endorsers",
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

(SchemaPropertyEndorsers as typeof SchemaPropertyEndorsers & { toStructuredData: (props: SchemaPropertyEndorsersProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
