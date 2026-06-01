import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoEqualsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoEqualsProps extends GeoEqualsPropertyInput, GeneratedPropertyUiProps<GeoEqualsPropertyInput> {}

export function SchemaPropertyGeoEquals({ value: legacyValue, description = "Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). \"Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other\" (a symmetric relationship).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoEqualsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoEqualsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-equals",
    shellClassName: "lander-semantic--schema-property-geo-equals",
    title: "geoEquals",
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
