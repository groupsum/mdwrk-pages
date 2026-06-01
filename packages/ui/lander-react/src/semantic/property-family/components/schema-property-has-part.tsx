import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasPartProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasPart({ value, description = "Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasPartProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasPartPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-part",
    shellClassName: "lander-semantic--schema-property-has-part",
    title: "hasPart",
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
