import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OfferedByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOfferedByProps extends OfferedByPropertyInput, GeneratedPropertyUiProps<OfferedByPropertyInput> {}

export function SchemaPropertyOfferedBy({ value: legacyValue, description = "A pointer to the organization or person making the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOfferedByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OfferedByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-offered-by",
    shellClassName: "lander-semantic--schema-property-offered-by",
    title: "offeredBy",
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

(SchemaPropertyOfferedBy as typeof SchemaPropertyOfferedBy & { toStructuredData: (props: SchemaPropertyOfferedByProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
