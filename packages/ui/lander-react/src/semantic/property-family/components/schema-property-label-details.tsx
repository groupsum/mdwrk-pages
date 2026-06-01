import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLabelDetailsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLabelDetails({ value, description = "Link to the drug's label details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLabelDetailsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LabelDetailsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-label-details",
    shellClassName: "lander-semantic--schema-property-label-details",
    title: "labelDetails",
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
