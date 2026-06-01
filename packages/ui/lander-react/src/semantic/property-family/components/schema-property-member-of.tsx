import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MemberOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMemberOfProps extends MemberOfPropertyInput, GeneratedPropertyUiProps<MemberOfPropertyInput> {}

export function SchemaPropertyMemberOf({ value: legacyValue, description = "An Organization (or ProgramMembership) to which this Person or Organization belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMemberOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MemberOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-member-of",
    shellClassName: "lander-semantic--schema-property-member-of",
    title: "memberOf",
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
