import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedPathophysiologyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAssociatedPathophysiology({ value, description = "If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAssociatedPathophysiologyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedPathophysiologyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-pathophysiology",
    shellClassName: "lander-semantic--schema-property-associated-pathophysiology",
    title: "associatedPathophysiology",
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
