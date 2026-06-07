import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AdministrationRoutePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAdministrationRouteProps extends AdministrationRoutePropertyInput, GeneratedPropertyUiProps<AdministrationRoutePropertyInput> {}

export function SchemaPropertyAdministrationRoute({ value: legacyValue, description = "A route by which this drug may be administered, e.g. 'oral'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAdministrationRouteProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyAdministrationRoute as typeof SchemaPropertyAdministrationRoute & { toStructuredData: (props: SchemaPropertyAdministrationRouteProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
