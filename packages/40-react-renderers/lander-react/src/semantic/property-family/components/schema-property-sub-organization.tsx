import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SubOrganizationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubOrganizationProps extends SubOrganizationPropertyInput, GeneratedPropertyUiProps<SubOrganizationPropertyInput> {}

export function SchemaPropertySubOrganization({ value: legacyValue, description = "A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySubOrganizationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertySubOrganization as typeof SchemaPropertySubOrganization & { toStructuredData: (props: SchemaPropertySubOrganizationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
