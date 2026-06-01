import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCertificationStatusProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCertificationStatus({ value, description = "Indicates the current status of a certification: active or inactive. See also  [gs1:certificationStatus](https://www.gs1.org/voc/certificationStatus).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCertificationStatusProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CertificationStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-certification-status",
    shellClassName: "lander-semantic--schema-property-certification-status",
    title: "certificationStatus",
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
