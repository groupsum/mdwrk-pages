import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEndTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEndTime({ value, description = "The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\\n\\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEndTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EndTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-end-time",
    shellClassName: "lander-semantic--schema-property-end-time",
    title: "endTime",
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
