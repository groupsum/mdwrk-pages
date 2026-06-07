import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IdentifierPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIdentifierProps extends IdentifierPropertyInput, GeneratedPropertyUiProps<IdentifierPropertyInput> {}

export function SchemaPropertyIdentifier({ value: legacyValue, description = "The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.\n        ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIdentifierProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IdentifierPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-identifier",
    shellClassName: "lander-semantic--schema-property-identifier",
    title: "identifier",
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

(SchemaPropertyIdentifier as typeof SchemaPropertyIdentifier & { toStructuredData: (props: SchemaPropertyIdentifierProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
