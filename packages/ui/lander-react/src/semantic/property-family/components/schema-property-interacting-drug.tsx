import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InteractingDrugPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractingDrugProps extends InteractingDrugPropertyInput, GeneratedPropertyUiProps<InteractingDrugPropertyInput> {}

export function SchemaPropertyInteractingDrug({ value: legacyValue, description = "Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInteractingDrugProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyInteractingDrug as typeof SchemaPropertyInteractingDrug & { toStructuredData: (props: SchemaPropertyInteractingDrugProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
