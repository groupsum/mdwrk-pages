import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBioChemInteractionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBioChemInteraction({ value, description = "A BioChemEntity that is known to interact with this item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBioChemInteractionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BioChemInteractionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-bio-chem-interaction",
    shellClassName: "lander-semantic--schema-property-bio-chem-interaction",
    title: "bioChemInteraction",
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
