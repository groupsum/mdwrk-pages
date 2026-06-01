import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIssuedByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIssuedBy({ value, description = "The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIssuedByProps) {
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
