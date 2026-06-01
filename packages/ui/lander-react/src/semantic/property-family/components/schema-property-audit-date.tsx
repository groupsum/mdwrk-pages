import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AuditDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAuditDateProps extends AuditDatePropertyInput, GeneratedPropertyUiProps<AuditDatePropertyInput> {}

export function SchemaPropertyAuditDate({ value: legacyValue, description = "Date when a certification was last audited. See also  [gs1:certificationAuditDate](https://www.gs1.org/voc/certificationAuditDate).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAuditDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AuditDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-audit-date",
    shellClassName: "lander-semantic--schema-property-audit-date",
    title: "auditDate",
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
