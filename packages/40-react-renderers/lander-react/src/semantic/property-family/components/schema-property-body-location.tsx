import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BodyLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBodyLocationProps extends BodyLocationPropertyInput, GeneratedPropertyUiProps<BodyLocationPropertyInput> {}

export function SchemaPropertyBodyLocation({ value: legacyValue, description = "Location in the body of the anatomical structure.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBodyLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BodyLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-body-location",
    shellClassName: "lander-semantic--schema-property-body-location",
    title: "bodyLocation",
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

(SchemaPropertyBodyLocation as typeof SchemaPropertyBodyLocation & { toStructuredData: (props: SchemaPropertyBodyLocationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
