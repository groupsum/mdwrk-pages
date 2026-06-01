import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsProprietaryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsProprietary({ value, description = "True if this item's name is a proprietary/brand name (vs. generic name).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsProprietaryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsProprietaryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-proprietary",
    shellClassName: "lander-semantic--schema-property-is-proprietary",
    title: "isProprietary",
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
