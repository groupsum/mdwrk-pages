import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIdentifierProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIdentifier({ value, description = "The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.\n        ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIdentifierProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IdentifierPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-identifier",
    shellClassName: "lander-semantic--schema-property-identifier",
    title: "identifier",
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
