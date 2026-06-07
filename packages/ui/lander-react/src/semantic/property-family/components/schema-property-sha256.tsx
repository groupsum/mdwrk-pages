import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { Sha256PropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySha256Props extends Sha256PropertyInput, GeneratedPropertyUiProps<Sha256PropertyInput> {}

export function SchemaPropertySha256({ value: legacyValue, description = "The [SHA-2](https://en.wikipedia.org/wiki/SHA-2) SHA256 hash of the content of the item. For example, a zero-length input has value 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySha256Props) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Sha256PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sha256",
    shellClassName: "lander-semantic--schema-property-sha256",
    title: "sha256",
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

(SchemaPropertySha256 as typeof SchemaPropertySha256 & { toStructuredData: (props: SchemaPropertySha256Props) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
