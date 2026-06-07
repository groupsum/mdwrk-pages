import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PublicAccessPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublicAccessProps extends PublicAccessPropertyInput, GeneratedPropertyUiProps<PublicAccessPropertyInput> {}

export function SchemaPropertyPublicAccess({ value: legacyValue, description = "A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPublicAccessProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublicAccessPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-public-access",
    shellClassName: "lander-semantic--schema-property-public-access",
    title: "publicAccess",
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

(SchemaPropertyPublicAccess as typeof SchemaPropertyPublicAccess & { toStructuredData: (props: SchemaPropertyPublicAccessProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
