import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStartTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStartTime({ value, description = "The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\\n\\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStartTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StartTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-start-time",
    shellClassName: "lander-semantic--schema-property-start-time",
    title: "startTime",
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
