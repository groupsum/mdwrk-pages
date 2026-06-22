import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EligibleRegionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleRegionProps extends EligibleRegionPropertyInput, GeneratedPropertyUiProps<EligibleRegionPropertyInput> {}

export function SchemaPropertyEligibleRegion({ value: legacyValue, description = "The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\\n\\nSee also [[ineligibleRegion]].\n    ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEligibleRegionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EligibleRegionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-eligible-region",
    shellClassName: "lander-semantic--schema-property-eligible-region",
    title: "eligibleRegion",
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

(SchemaPropertyEligibleRegion as typeof SchemaPropertyEligibleRegion & { toStructuredData: (props: SchemaPropertyEligibleRegionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
