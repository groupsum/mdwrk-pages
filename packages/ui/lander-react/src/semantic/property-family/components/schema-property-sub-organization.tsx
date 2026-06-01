import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubOrganizationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySubOrganization({ value, description = "A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySubOrganizationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubOrganizationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-organization",
    shellClassName: "lander-semantic--schema-property-sub-organization",
    title: "subOrganization",
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
