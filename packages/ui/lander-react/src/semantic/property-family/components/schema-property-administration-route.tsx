import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAdministrationRouteProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAdministrationRoute({ value, description = "A route by which this drug may be administered, e.g. 'oral'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAdministrationRouteProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AdministrationRoutePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-administration-route",
    shellClassName: "lander-semantic--schema-property-administration-route",
    title: "administrationRoute",
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
