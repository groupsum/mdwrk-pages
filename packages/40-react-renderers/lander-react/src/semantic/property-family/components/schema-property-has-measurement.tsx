import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasMeasurementPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMeasurementProps extends HasMeasurementPropertyInput, GeneratedPropertyUiProps<HasMeasurementPropertyInput> {}

export function SchemaPropertyHasMeasurement({ value: legacyValue, description = "A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasMeasurementProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMeasurementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-measurement",
    shellClassName: "lander-semantic--schema-property-has-measurement",
    title: "hasMeasurement",
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

(SchemaPropertyHasMeasurement as typeof SchemaPropertyHasMeasurement & { toStructuredData: (props: SchemaPropertyHasMeasurementProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
