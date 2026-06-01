import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasCertificationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasCertification({ value, description = "Certification information about a product, organization, service, place, or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasCertificationProps) {
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
