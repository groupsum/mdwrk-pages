import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMechanismOfActionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMechanismOfAction({ value, description = "The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMechanismOfActionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MechanismOfActionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-mechanism-of-action",
    shellClassName: "lander-semantic--schema-property-mechanism-of-action",
    title: "mechanismOfAction",
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
