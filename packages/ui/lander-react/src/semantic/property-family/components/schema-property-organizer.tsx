import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OrganizerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOrganizerProps extends OrganizerPropertyInput, GeneratedPropertyUiProps<OrganizerPropertyInput> {}

export function SchemaPropertyOrganizer({ value: legacyValue, description = "An organizer of an Event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOrganizerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyOrganizer as typeof SchemaPropertyOrganizer & { toStructuredData: (props: SchemaPropertyOrganizerProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
