import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMenuSectionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasMenuSection({ value, description = "A subgrouping of the menu (by dishes, course, serving time period, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasMenuSectionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMenuSectionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-menu-section",
    shellClassName: "lander-semantic--schema-property-has-menu-section",
    title: "hasMenuSection",
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
