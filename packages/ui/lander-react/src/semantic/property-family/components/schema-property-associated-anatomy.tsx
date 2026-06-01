import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedAnatomyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAssociatedAnatomy({ value, description = "The anatomy of the underlying organ system or structures associated with this entity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAssociatedAnatomyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedAnatomyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-anatomy",
    shellClassName: "lander-semantic--schema-property-associated-anatomy",
    title: "associatedAnatomy",
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
