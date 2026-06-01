import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuccessorOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySuccessorOf({ value, description = "A pointer from a newer variant of a product  to its previous, often discontinued predecessor.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySuccessorOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuccessorOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-successor-of",
    shellClassName: "lander-semantic--schema-property-successor-of",
    title: "successorOf",
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
