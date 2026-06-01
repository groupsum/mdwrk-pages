import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedMediaProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAssociatedMedia({ value, description = "A media object that encodes this CreativeWork. This property is a synonym for encoding.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAssociatedMediaProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedMediaPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-media",
    shellClassName: "lander-semantic--schema-property-associated-media",
    title: "associatedMedia",
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
