import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AffiliationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAffiliationProps extends AffiliationPropertyInput, GeneratedPropertyUiProps<AffiliationPropertyInput> {}

export function SchemaPropertyAffiliation({ value: legacyValue, description = "An organization that this person is affiliated with. For example, a school/university, a club, or a team.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAffiliationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
