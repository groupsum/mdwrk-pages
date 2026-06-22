import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AudienceTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAudienceTypeProps extends AudienceTypePropertyInput, GeneratedPropertyUiProps<AudienceTypePropertyInput> {}

export function SchemaPropertyAudienceType({ value: legacyValue, description = "The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAudienceTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AudienceTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-audience-type",
    shellClassName: "lander-semantic--schema-property-audience-type",
    title: "audienceType",
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

(SchemaPropertyAudienceType as typeof SchemaPropertyAudienceType & { toStructuredData: (props: SchemaPropertyAudienceTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
