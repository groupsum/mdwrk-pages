import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlbumProductionTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlbumProductionTypeProps extends AlbumProductionTypePropertyInput, GeneratedPropertyUiProps<AlbumProductionTypePropertyInput> {}

export function SchemaPropertyAlbumProductionType({ value: legacyValue, description = "Classification of the album by its type of content: soundtrack, live album, studio album, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlbumProductionTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlbumProductionTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-album-production-type",
    shellClassName: "lander-semantic--schema-property-album-production-type",
    title: "albumProductionType",
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

(SchemaPropertyAlbumProductionType as typeof SchemaPropertyAlbumProductionType & { toStructuredData: (props: SchemaPropertyAlbumProductionTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
