import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClincalPharmacologyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyClincalPharmacology({ value, description = "Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyClincalPharmacologyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ClincalPharmacologyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-clincal-pharmacology",
    shellClassName: "lander-semantic--schema-property-clincal-pharmacology",
    title: "clincalPharmacology",
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
