import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyServiceType({ value, description = "The type of service being offered, e.g. veterans' benefits, emergency relief, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyServiceTypeProps) {
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
