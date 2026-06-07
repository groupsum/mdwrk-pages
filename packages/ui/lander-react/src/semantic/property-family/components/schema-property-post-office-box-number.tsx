import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PostOfficeBoxNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostOfficeBoxNumberProps extends PostOfficeBoxNumberPropertyInput, GeneratedPropertyUiProps<PostOfficeBoxNumberPropertyInput> {}

export function SchemaPropertyPostOfficeBoxNumber({ value: legacyValue, description = "The post office box number for PO box addresses.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPostOfficeBoxNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostOfficeBoxNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-post-office-box-number",
    shellClassName: "lander-semantic--schema-property-post-office-box-number",
    title: "postOfficeBoxNumber",
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

(SchemaPropertyPostOfficeBoxNumber as typeof SchemaPropertyPostOfficeBoxNumber & { toStructuredData: (props: SchemaPropertyPostOfficeBoxNumberProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
