import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { VatIDPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVatIDProps extends VatIDPropertyInput, GeneratedPropertyUiProps<VatIDPropertyInput> {}

export function SchemaPropertyVatID({ value: legacyValue, description = "The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyVatIDProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VatIDPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-vat-id",
    shellClassName: "lander-semantic--schema-property-vat-id",
    title: "vatID",
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

(SchemaPropertyVatID as typeof SchemaPropertyVatID & { toStructuredData: (props: SchemaPropertyVatIDProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
