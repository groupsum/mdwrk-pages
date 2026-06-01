import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMemberProgramProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasMemberProgram({ value, description = "MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasMemberProgramProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMemberProgramPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-member-program",
    shellClassName: "lander-semantic--schema-property-has-member-program",
    title: "hasMemberProgram",
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
