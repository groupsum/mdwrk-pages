import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCreditedToProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCreditedTo({ value, description = "The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to \"Stefani Germanotta Band\", but by Lady Gaga.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCreditedToProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CreditedToPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-credited-to",
    shellClassName: "lander-semantic--schema-property-credited-to",
    title: "creditedTo",
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
