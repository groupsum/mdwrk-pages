import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EvidenceOriginPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEvidenceOriginProps extends EvidenceOriginPropertyInput, GeneratedPropertyUiProps<EvidenceOriginPropertyInput> {}

export function SchemaPropertyEvidenceOrigin({ value: legacyValue, description = "Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEvidenceOriginProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EvidenceOriginPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-evidence-origin",
    shellClassName: "lander-semantic--schema-property-evidence-origin",
    title: "evidenceOrigin",
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

(SchemaPropertyEvidenceOrigin as typeof SchemaPropertyEvidenceOrigin & { toStructuredData: (props: SchemaPropertyEvidenceOriginProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
