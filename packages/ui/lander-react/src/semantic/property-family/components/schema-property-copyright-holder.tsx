import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCopyrightHolderProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCopyrightHolder({ value, description = "The party holding the legal copyright to the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCopyrightHolderProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CopyrightHolderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-copyright-holder",
    shellClassName: "lander-semantic--schema-property-copyright-holder",
    title: "copyrightHolder",
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
