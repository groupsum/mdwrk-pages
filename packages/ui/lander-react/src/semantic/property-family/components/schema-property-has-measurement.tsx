import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMeasurementProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasMeasurement({ value, description = "A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasMeasurementProps) {
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
