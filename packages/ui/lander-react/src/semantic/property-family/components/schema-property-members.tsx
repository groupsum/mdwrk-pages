import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMembersProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMembers({ value, description = "A member of this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMembersProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MembersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-members",
    shellClassName: "lander-semantic--schema-property-members",
    title: "members",
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
