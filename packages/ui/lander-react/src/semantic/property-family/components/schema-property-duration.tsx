import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDurationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDuration({ value, description = "The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDurationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DurationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-duration",
    shellClassName: "lander-semantic--schema-property-duration",
    title: "duration",
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
