import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SchemaVersionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySchemaVersionProps extends SchemaVersionPropertyInput, GeneratedPropertyUiProps<SchemaVersionPropertyInput> {}

export function SchemaPropertySchemaVersion({ value: legacyValue, description = "Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to\n    indicate the use of a specific schema.org release, e.g. ```10.0``` as a simple string, or more explicitly via URL, ```https://schema.org/docs/releases.html#v10.0```. There may be situations in which other schemas might usefully be referenced this way, e.g. ```http://dublincore.org/specifications/dublin-core/dces/1999-07-02/``` but this has not been carefully explored in the community.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySchemaVersionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SchemaVersionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-schema-version",
    shellClassName: "lander-semantic--schema-property-schema-version",
    title: "schemaVersion",
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
