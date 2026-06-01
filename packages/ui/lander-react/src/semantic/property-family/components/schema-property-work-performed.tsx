import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkPerformedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWorkPerformed({ value, description = "A work performed in some event, for example a play performed in a TheaterEvent.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWorkPerformedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorkPerformedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-work-performed",
    shellClassName: "lander-semantic--schema-property-work-performed",
    title: "workPerformed",
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
