import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MediaEnumerationProps extends GeneratedEnumerationProps<string> {}

export function MediaEnumeration({ value, description = "MediaEnumeration enumerations are lists of codes, labels etc. useful for describing media objects. They may be reflections of externally developed lists, or created at schema.org, or a combination.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MediaEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MediaEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-media-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-media-enumeration",
    title: "MediaEnumeration",
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

(MediaEnumeration as typeof MediaEnumeration & { toStructuredData: (props: MediaEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
