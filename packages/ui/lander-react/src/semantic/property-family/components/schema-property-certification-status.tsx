import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CertificationStatusPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCertificationStatusProps extends CertificationStatusPropertyInput, GeneratedPropertyUiProps<CertificationStatusPropertyInput> {}

export function SchemaPropertyCertificationStatus({ value: legacyValue, description = "Indicates the current status of a certification: active or inactive. See also  [gs1:certificationStatus](https://www.gs1.org/voc/certificationStatus).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCertificationStatusProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
