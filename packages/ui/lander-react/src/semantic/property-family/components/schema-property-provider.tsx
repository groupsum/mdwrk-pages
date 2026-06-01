import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProviderProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProvider({ value, description = "The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProviderProps) {
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
