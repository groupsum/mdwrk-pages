import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContactPointPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactPointProps extends ContactPointPropertyInput, GeneratedPropertyUiProps<ContactPointPropertyInput> {}

export function SchemaPropertyContactPoint({ value: legacyValue, description = "A contact point for a person or organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContactPointProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContactPointPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contact-point",
    shellClassName: "lander-semantic--schema-property-contact-point",
    title: "contactPoint",
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

(SchemaPropertyContactPoint as typeof SchemaPropertyContactPoint & { toStructuredData: (props: SchemaPropertyContactPointProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
