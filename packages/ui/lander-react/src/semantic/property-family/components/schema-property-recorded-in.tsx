import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecordedInProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRecordedIn({ value, description = "The CreativeWork that captured all or part of this Event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRecordedInProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecordedInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-recorded-in",
    shellClassName: "lander-semantic--schema-property-recorded-in",
    title: "recordedIn",
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
