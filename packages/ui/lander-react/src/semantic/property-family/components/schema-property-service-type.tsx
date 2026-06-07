import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ServiceTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceTypeProps extends ServiceTypePropertyInput, GeneratedPropertyUiProps<ServiceTypePropertyInput> {}

export function SchemaPropertyServiceType({ value: legacyValue, description = "The type of service being offered, e.g. veterans' benefits, emergency relief, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyServiceTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-type",
    shellClassName: "lander-semantic--schema-property-service-type",
    title: "serviceType",
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

(SchemaPropertyServiceType as typeof SchemaPropertyServiceType & { toStructuredData: (props: SchemaPropertyServiceTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
