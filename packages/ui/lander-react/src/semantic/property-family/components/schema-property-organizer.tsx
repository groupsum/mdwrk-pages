import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOrganizerProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOrganizer({ value, description = "An organizer of an Event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOrganizerProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OrganizerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-organizer",
    shellClassName: "lander-semantic--schema-property-organizer",
    title: "organizer",
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
