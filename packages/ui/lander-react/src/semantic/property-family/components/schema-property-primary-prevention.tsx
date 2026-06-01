import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrimaryPreventionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPrimaryPrevention({ value, description = "A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPrimaryPreventionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrimaryPreventionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-primary-prevention",
    shellClassName: "lander-semantic--schema-property-primary-prevention",
    title: "primaryPrevention",
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
