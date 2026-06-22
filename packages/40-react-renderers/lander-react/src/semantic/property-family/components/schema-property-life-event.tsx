import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LifeEventPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLifeEventProps extends LifeEventPropertyInput, GeneratedPropertyUiProps<LifeEventPropertyInput> {}

export function SchemaPropertyLifeEvent({ value: legacyValue, description = "A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLifeEventProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LifeEventPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-life-event",
    shellClassName: "lander-semantic--schema-property-life-event",
    title: "lifeEvent",
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

(SchemaPropertyLifeEvent as typeof SchemaPropertyLifeEvent & { toStructuredData: (props: SchemaPropertyLifeEventProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
