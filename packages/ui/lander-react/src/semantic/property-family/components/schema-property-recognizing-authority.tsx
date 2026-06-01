import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecognizingAuthorityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRecognizingAuthority({ value, description = "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRecognizingAuthorityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecognizingAuthorityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-recognizing-authority",
    shellClassName: "lander-semantic--schema-property-recognizing-authority",
    title: "recognizingAuthority",
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
