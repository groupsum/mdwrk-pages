import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAffiliationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAffiliation({ value, description = "An organization that this person is affiliated with. For example, a school/university, a club, or a team.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAffiliationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AffiliationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-affiliation",
    shellClassName: "lander-semantic--schema-property-affiliation",
    title: "affiliation",
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
