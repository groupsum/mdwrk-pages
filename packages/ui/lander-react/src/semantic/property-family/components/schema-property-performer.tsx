import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPerformerProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPerformer({ value, description = "A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPerformerProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PerformerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-performer",
    shellClassName: "lander-semantic--schema-property-performer",
    title: "performer",
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
