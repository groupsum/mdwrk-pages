import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAuditDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAuditDate({ value, description = "Date when a certification was last audited. See also  [gs1:certificationAuditDate](https://www.gs1.org/voc/certificationAuditDate).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAuditDateProps) {
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
