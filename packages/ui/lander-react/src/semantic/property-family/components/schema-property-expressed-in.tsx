import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpressedInProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExpressedIn({ value, description = "Tissue, organ, biological sample, etc in which activity of this gene has been observed experimentally. For example brain, digestive system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExpressedInProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExpressedInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-expressed-in",
    shellClassName: "lander-semantic--schema-property-expressed-in",
    title: "expressedIn",
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
