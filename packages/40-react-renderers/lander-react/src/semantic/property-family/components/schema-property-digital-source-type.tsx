import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DigitalSourceTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDigitalSourceTypeProps extends DigitalSourceTypePropertyInput, GeneratedPropertyUiProps<DigitalSourceTypePropertyInput> {}

export function SchemaPropertyDigitalSourceType({ value: legacyValue, description = "Indicates an IPTCDigitalSourceEnumeration code indicating the nature of the digital source(s) for some [[CreativeWork]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDigitalSourceTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DigitalSourceTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-digital-source-type",
    shellClassName: "lander-semantic--schema-property-digital-source-type",
    title: "digitalSourceType",
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

(SchemaPropertyDigitalSourceType as typeof SchemaPropertyDigitalSourceType & { toStructuredData: (props: SchemaPropertyDigitalSourceTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
