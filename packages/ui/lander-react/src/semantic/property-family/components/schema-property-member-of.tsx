import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMemberOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMemberOf({ value, description = "An Organization (or ProgramMembership) to which this Person or Organization belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMemberOfProps) {
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
