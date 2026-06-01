import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOwnershipFundingInfoProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOwnershipFundingInfo({ value, description = "For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOwnershipFundingInfoProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OwnershipFundingInfoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-ownership-funding-info",
    shellClassName: "lander-semantic--schema-property-ownership-funding-info",
    title: "ownershipFundingInfo",
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
