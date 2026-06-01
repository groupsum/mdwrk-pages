import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAdditionalPropertyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAdditionalProperty({ value, description = "A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\\n\\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.\n", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAdditionalPropertyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AdditionalPropertyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-additional-property",
    shellClassName: "lander-semantic--schema-property-additional-property",
    title: "additionalProperty",
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
