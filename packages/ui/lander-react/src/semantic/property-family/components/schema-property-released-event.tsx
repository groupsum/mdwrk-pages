import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReleasedEventProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReleasedEvent({ value, description = "The place and time the release was issued, expressed as a PublicationEvent.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReleasedEventProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReleasedEventPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-released-event",
    shellClassName: "lander-semantic--schema-property-released-event",
    title: "releasedEvent",
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
