import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDomainIncludesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDomainIncludes({ value, description = "Relates a property to a class that is (one of) the type(s) the property is expected to be used on.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDomainIncludesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DomainIncludesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-domain-includes",
    shellClassName: "lander-semantic--schema-property-domain-includes",
    title: "domainIncludes",
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
