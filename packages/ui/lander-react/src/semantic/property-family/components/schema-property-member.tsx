import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMemberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMember({ value, description = "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMemberProps) {
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
