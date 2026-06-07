import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BreastfeedingWarningPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBreastfeedingWarningProps extends BreastfeedingWarningPropertyInput, GeneratedPropertyUiProps<BreastfeedingWarningPropertyInput> {}

export function SchemaPropertyBreastfeedingWarning({ value: legacyValue, description = "Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBreastfeedingWarningProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BreastfeedingWarningPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-breastfeeding-warning",
    shellClassName: "lander-semantic--schema-property-breastfeeding-warning",
    title: "breastfeedingWarning",
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

(SchemaPropertyBreastfeedingWarning as typeof SchemaPropertyBreastfeedingWarning & { toStructuredData: (props: SchemaPropertyBreastfeedingWarningProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
