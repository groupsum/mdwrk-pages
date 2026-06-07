import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContactPointsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactPointsProps extends ContactPointsPropertyInput, GeneratedPropertyUiProps<ContactPointsPropertyInput> {}

export function SchemaPropertyContactPoints({ value: legacyValue, description = "A contact point for a person or organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContactPointsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContactPointsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contact-points",
    shellClassName: "lander-semantic--schema-property-contact-points",
    title: "contactPoints",
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

(SchemaPropertyContactPoints as typeof SchemaPropertyContactPoints & { toStructuredData: (props: SchemaPropertyContactPointsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
