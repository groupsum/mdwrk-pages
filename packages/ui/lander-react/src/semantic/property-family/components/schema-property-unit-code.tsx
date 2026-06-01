import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUnitCodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUnitCode({ value, description = "The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUnitCodeProps) {
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
