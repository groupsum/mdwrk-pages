import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublicAccessProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPublicAccess({ value, description = "A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPublicAccessProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublicAccessPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-public-access",
    shellClassName: "lander-semantic--schema-property-public-access",
    title: "publicAccess",
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
