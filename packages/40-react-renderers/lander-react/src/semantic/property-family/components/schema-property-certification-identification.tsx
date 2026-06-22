import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CertificationIdentificationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCertificationIdentificationProps extends CertificationIdentificationPropertyInput, GeneratedPropertyUiProps<CertificationIdentificationPropertyInput> {}

export function SchemaPropertyCertificationIdentification({ value: legacyValue, description = "Identifier of a certification instance (as registered with an independent certification body). Typically this identifier can be used to consult and verify the certification instance. See also [gs1:certificationIdentification](https://www.gs1.org/voc/certificationIdentification).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCertificationIdentificationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CertificationIdentificationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-certification-identification",
    shellClassName: "lander-semantic--schema-property-certification-identification",
    title: "certificationIdentification",
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

(SchemaPropertyCertificationIdentification as typeof SchemaPropertyCertificationIdentification & { toStructuredData: (props: SchemaPropertyCertificationIdentificationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
