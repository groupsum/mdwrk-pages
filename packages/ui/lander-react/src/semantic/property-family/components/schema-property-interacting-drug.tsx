import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractingDrugProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInteractingDrug({ value, description = "Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInteractingDrugProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InteractingDrugPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-interacting-drug",
    shellClassName: "lander-semantic--schema-property-interacting-drug",
    title: "interactingDrug",
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
