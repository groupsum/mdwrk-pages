import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IssuedByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIssuedByProps extends IssuedByPropertyInput, GeneratedPropertyUiProps<IssuedByPropertyInput> {}

export function SchemaPropertyIssuedBy({ value: legacyValue, description = "The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIssuedByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IssuedByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-issued-by",
    shellClassName: "lander-semantic--schema-property-issued-by",
    title: "issuedBy",
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

(SchemaPropertyIssuedBy as typeof SchemaPropertyIssuedBy & { toStructuredData: (props: SchemaPropertyIssuedByProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
