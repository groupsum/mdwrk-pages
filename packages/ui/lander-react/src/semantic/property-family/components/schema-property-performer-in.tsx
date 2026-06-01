import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPerformerInProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPerformerIn({ value, description = "Event that this person is a performer or participant in.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPerformerInProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PerformerInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-performer-in",
    shellClassName: "lander-semantic--schema-property-performer-in",
    title: "performerIn",
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
