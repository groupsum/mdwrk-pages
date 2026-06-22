import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MemberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMemberProps extends MemberPropertyInput, GeneratedPropertyUiProps<MemberPropertyInput> {}

export function SchemaPropertyMember({ value: legacyValue, description = "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMemberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MemberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-member",
    shellClassName: "lander-semantic--schema-property-member",
    title: "member",
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

(SchemaPropertyMember as typeof SchemaPropertyMember & { toStructuredData: (props: SchemaPropertyMemberProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
