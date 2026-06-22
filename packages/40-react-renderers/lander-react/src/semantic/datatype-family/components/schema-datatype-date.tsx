import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedDatatypeProps, buildGeneratedDatatypeStructuredData, renderGeneratedDatatypeCard } from "../shared.js";

export interface DateProps extends GeneratedDatatypeProps<string> {}

export function Date({ value, description = "A date value in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: DateProps) {
  return renderGeneratedDatatypeCard({
    StructuredDataComponent: structuredDataReact.DateStructuredData,
    defaultEyebrow: "Datatype",
    kind: "schema-datatype-date",
    shellClassName: "lander-semantic--schema-datatype-date",
    title: "Date",
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

(Date as typeof Date & { toStructuredData: (props: DateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedDatatypeStructuredData(props);
