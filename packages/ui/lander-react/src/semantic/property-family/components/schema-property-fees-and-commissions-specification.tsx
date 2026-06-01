import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFeesAndCommissionsSpecificationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFeesAndCommissionsSpecification({ value, description = "Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFeesAndCommissionsSpecificationProps) {
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
