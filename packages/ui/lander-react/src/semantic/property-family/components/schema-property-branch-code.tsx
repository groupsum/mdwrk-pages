import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BranchCodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBranchCodeProps extends BranchCodePropertyInput, GeneratedPropertyUiProps<BranchCodePropertyInput> {}

export function SchemaPropertyBranchCode({ value: legacyValue, description = "A short textual code (also called \"store code\") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\\n\\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code \"3047\" is a branchCode for a particular branch.\n      ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBranchCodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BranchCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-branch-code",
    shellClassName: "lander-semantic--schema-property-branch-code",
    title: "branchCode",
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
