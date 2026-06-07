import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LongitudePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLongitudeProps extends LongitudePropertyInput, GeneratedPropertyUiProps<LongitudePropertyInput> {}

export function SchemaPropertyLongitude({ value: legacyValue, description = "The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLongitudeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LongitudePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-longitude",
    shellClassName: "lander-semantic--schema-property-longitude",
    title: "longitude",
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

(SchemaPropertyLongitude as typeof SchemaPropertyLongitude & { toStructuredData: (props: SchemaPropertyLongitudeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
