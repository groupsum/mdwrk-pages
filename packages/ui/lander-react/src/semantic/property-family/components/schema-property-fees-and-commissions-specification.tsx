import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FeesAndCommissionsSpecificationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFeesAndCommissionsSpecificationProps extends FeesAndCommissionsSpecificationPropertyInput, GeneratedPropertyUiProps<FeesAndCommissionsSpecificationPropertyInput> {}

export function SchemaPropertyFeesAndCommissionsSpecification({ value: legacyValue, description = "Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFeesAndCommissionsSpecificationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FeesAndCommissionsSpecificationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-fees-and-commissions-specification",
    shellClassName: "lander-semantic--schema-property-fees-and-commissions-specification",
    title: "feesAndCommissionsSpecification",
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
