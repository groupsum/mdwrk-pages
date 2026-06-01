import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedStructureProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRelatedStructure({ value, description = "Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRelatedStructureProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedStructurePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-structure",
    shellClassName: "lander-semantic--schema-property-related-structure",
    title: "relatedStructure",
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
