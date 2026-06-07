import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ServiceLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceLocationProps extends ServiceLocationPropertyInput, GeneratedPropertyUiProps<ServiceLocationPropertyInput> {}

export function SchemaPropertyServiceLocation({ value: legacyValue, description = "The location (e.g. civic structure, local business, etc.) where a person can go to access the service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyServiceLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-location",
    shellClassName: "lander-semantic--schema-property-service-location",
    title: "serviceLocation",
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

(SchemaPropertyServiceLocation as typeof SchemaPropertyServiceLocation & { toStructuredData: (props: SchemaPropertyServiceLocationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
