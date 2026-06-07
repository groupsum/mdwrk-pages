import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedDatatypeProps, buildGeneratedDatatypeStructuredData, renderGeneratedDatatypeCard } from "../shared.js";

export interface DateTimeProps extends GeneratedDatatypeProps<string> {}

export function DateTime({ value, description = "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: DateTimeProps) {
  return renderGeneratedDatatypeCard({
    StructuredDataComponent: structuredDataReact.DateTimeStructuredData,
    defaultEyebrow: "Datatype",
    kind: "schema-datatype-date-time",
    shellClassName: "lander-semantic--schema-datatype-date-time",
    title: "DateTime",
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

(DateTime as typeof DateTime & { toStructuredData: (props: DateTimeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedDatatypeStructuredData(props);
