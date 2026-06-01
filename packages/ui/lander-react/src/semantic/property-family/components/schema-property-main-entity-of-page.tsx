import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMainEntityOfPageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMainEntityOfPage({ value, description = "Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMainEntityOfPageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MainEntityOfPagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-main-entity-of-page",
    shellClassName: "lander-semantic--schema-property-main-entity-of-page",
    title: "mainEntityOfPage",
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
