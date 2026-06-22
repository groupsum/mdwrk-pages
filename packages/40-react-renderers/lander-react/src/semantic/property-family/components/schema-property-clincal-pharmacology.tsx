import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ClincalPharmacologyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClincalPharmacologyProps extends ClincalPharmacologyPropertyInput, GeneratedPropertyUiProps<ClincalPharmacologyPropertyInput> {}

export function SchemaPropertyClincalPharmacology({ value: legacyValue, description = "Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyClincalPharmacologyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyClincalPharmacology as typeof SchemaPropertyClincalPharmacology & { toStructuredData: (props: SchemaPropertyClincalPharmacologyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
