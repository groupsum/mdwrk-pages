import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DistributionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDistributionProps extends DistributionPropertyInput, GeneratedPropertyUiProps<DistributionPropertyInput> {}

export function SchemaPropertyDistribution({ value: legacyValue, description = "A downloadable form of this dataset, at a specific location, in a specific format. This property can be repeated if different variations are available. There is no expectation that different downloadable distributions must contain exactly equivalent information (see also [DCAT](https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution) on this point). Different distributions might include or exclude different subsets of the entire dataset, for example.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDistributionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DistributionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-distribution",
    shellClassName: "lander-semantic--schema-property-distribution",
    title: "distribution",
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

(SchemaPropertyDistribution as typeof SchemaPropertyDistribution & { toStructuredData: (props: SchemaPropertyDistributionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
