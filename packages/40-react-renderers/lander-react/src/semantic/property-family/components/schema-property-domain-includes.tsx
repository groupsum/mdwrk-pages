import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DomainIncludesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDomainIncludesProps extends DomainIncludesPropertyInput, GeneratedPropertyUiProps<DomainIncludesPropertyInput> {}

export function SchemaPropertyDomainIncludes({ value: legacyValue, description = "Relates a property to a class that is (one of) the type(s) the property is expected to be used on.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDomainIncludesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyDomainIncludes as typeof SchemaPropertyDomainIncludes & { toStructuredData: (props: SchemaPropertyDomainIncludesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
