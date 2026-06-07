import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MembersPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMembersProps extends MembersPropertyInput, GeneratedPropertyUiProps<MembersPropertyInput> {}

export function SchemaPropertyMembers({ value: legacyValue, description = "A member of this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMembersProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyMembers as typeof SchemaPropertyMembers & { toStructuredData: (props: SchemaPropertyMembersProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
