import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UnitCodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUnitCodeProps extends UnitCodePropertyInput, GeneratedPropertyUiProps<UnitCodePropertyInput> {}

export function SchemaPropertyUnitCode({ value: legacyValue, description = "The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUnitCodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UnitCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-unit-code",
    shellClassName: "lander-semantic--schema-property-unit-code",
    title: "unitCode",
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
