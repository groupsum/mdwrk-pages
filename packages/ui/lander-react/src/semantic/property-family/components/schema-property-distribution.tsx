import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDistributionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDistribution({ value, description = "A downloadable form of this dataset, at a specific location, in a specific format. This property can be repeated if different variations are available. There is no expectation that different downloadable distributions must contain exactly equivalent information (see also [DCAT](https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution) on this point). Different distributions might include or exclude different subsets of the entire dataset, for example.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDistributionProps) {
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
