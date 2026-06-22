import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HostingOrganizationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHostingOrganizationProps extends HostingOrganizationPropertyInput, GeneratedPropertyUiProps<HostingOrganizationPropertyInput> {}

export function SchemaPropertyHostingOrganization({ value: legacyValue, description = "The Organization (airline, travelers' club, retailer, etc.) the membership is made with or which offers the  MemberProgram.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHostingOrganizationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyHostingOrganization as typeof SchemaPropertyHostingOrganization & { toStructuredData: (props: SchemaPropertyHostingOrganizationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
