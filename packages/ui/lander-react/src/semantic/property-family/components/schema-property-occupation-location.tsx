import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OccupationLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOccupationLocationProps extends OccupationLocationPropertyInput, GeneratedPropertyUiProps<OccupationLocationPropertyInput> {}

export function SchemaPropertyOccupationLocation({ value: legacyValue, description = " The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOccupationLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OccupationLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-occupation-location",
    shellClassName: "lander-semantic--schema-property-occupation-location",
    title: "occupationLocation",
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

(SchemaPropertyOccupationLocation as typeof SchemaPropertyOccupationLocation & { toStructuredData: (props: SchemaPropertyOccupationLocationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
