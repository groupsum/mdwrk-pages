import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasCertificationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasCertificationProps extends HasCertificationPropertyInput, GeneratedPropertyUiProps<HasCertificationPropertyInput> {}

export function SchemaPropertyHasCertification({ value: legacyValue, description = "Certification information about a product, organization, service, place, or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasCertificationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasCertificationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-certification",
    shellClassName: "lander-semantic--schema-property-has-certification",
    title: "hasCertification",
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

(SchemaPropertyHasCertification as typeof SchemaPropertyHasCertification & { toStructuredData: (props: SchemaPropertyHasCertificationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
