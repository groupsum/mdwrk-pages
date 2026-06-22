import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProviderPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProviderProps extends ProviderPropertyInput, GeneratedPropertyUiProps<ProviderPropertyInput> {}

export function SchemaPropertyProvider({ value: legacyValue, description = "The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProviderProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProviderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-provider",
    shellClassName: "lander-semantic--schema-property-provider",
    title: "provider",
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

(SchemaPropertyProvider as typeof SchemaPropertyProvider & { toStructuredData: (props: SchemaPropertyProviderProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
