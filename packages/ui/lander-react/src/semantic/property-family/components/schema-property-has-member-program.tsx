import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasMemberProgramPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMemberProgramProps extends HasMemberProgramPropertyInput, GeneratedPropertyUiProps<HasMemberProgramPropertyInput> {}

export function SchemaPropertyHasMemberProgram({ value: legacyValue, description = "MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasMemberProgramProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyHasMemberProgram as typeof SchemaPropertyHasMemberProgram & { toStructuredData: (props: SchemaPropertyHasMemberProgramProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
