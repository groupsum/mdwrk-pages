import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContraindicationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContraindication({ value, description = "A contraindication for this therapy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContraindicationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContraindicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contraindication",
    shellClassName: "lander-semantic--schema-property-contraindication",
    title: "contraindication",
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
