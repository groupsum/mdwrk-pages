import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CopyrightNoticePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCopyrightNoticeProps extends CopyrightNoticePropertyInput, GeneratedPropertyUiProps<CopyrightNoticePropertyInput> {}

export function SchemaPropertyCopyrightNotice({ value: legacyValue, description = "Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCopyrightNoticeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CopyrightNoticePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-copyright-notice",
    shellClassName: "lander-semantic--schema-property-copyright-notice",
    title: "copyrightNotice",
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
