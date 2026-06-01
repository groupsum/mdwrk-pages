import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleRegionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEligibleRegion({ value, description = "The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\\n\\nSee also [[ineligibleRegion]].\n    ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEligibleRegionProps) {
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
