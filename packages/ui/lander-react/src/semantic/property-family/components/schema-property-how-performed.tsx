import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHowPerformedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHowPerformed({ value, description = "How the procedure is performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHowPerformedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HowPerformedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-how-performed",
    shellClassName: "lander-semantic--schema-property-how-performed",
    title: "howPerformed",
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
