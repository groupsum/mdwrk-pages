import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySha256Props extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySha256({ value, description = "The [SHA-2](https://en.wikipedia.org/wiki/SHA-2) SHA256 hash of the content of the item. For example, a zero-length input has value 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySha256Props) {
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
