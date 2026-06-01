import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLifeEventProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLifeEvent({ value, description = "A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLifeEventProps) {
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
