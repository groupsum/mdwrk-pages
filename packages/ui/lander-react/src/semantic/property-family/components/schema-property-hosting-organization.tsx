import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHostingOrganizationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHostingOrganization({ value, description = "The Organization (airline, travelers' club, retailer, etc.) the membership is made with or which offers the  MemberProgram.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHostingOrganizationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HostingOrganizationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-hosting-organization",
    shellClassName: "lander-semantic--schema-property-hosting-organization",
    title: "hostingOrganization",
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
