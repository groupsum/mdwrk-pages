import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IneligibleRegionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIneligibleRegionProps extends IneligibleRegionPropertyInput, GeneratedPropertyUiProps<IneligibleRegionPropertyInput> {}

export function SchemaPropertyIneligibleRegion({ value: legacyValue, description = "The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\\n\\nSee also [[eligibleRegion]].\n      ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIneligibleRegionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IneligibleRegionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-ineligible-region",
    shellClassName: "lander-semantic--schema-property-ineligible-region",
    title: "ineligibleRegion",
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

(SchemaPropertyIneligibleRegion as typeof SchemaPropertyIneligibleRegion & { toStructuredData: (props: SchemaPropertyIneligibleRegionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
