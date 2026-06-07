import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MusicReleaseFormatTypeProps extends GeneratedEnumerationProps<string> {}

export function MusicReleaseFormatType({ value, description = "Format of this release (the type of recording media used, i.e. compact disc, digital media, LP, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MusicReleaseFormatTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MusicReleaseFormatTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-music-release-format-type",
    shellClassName: "lander-semantic--schema-enumeration-music-release-format-type",
    title: "MusicReleaseFormatType",
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

(MusicReleaseFormatType as typeof MusicReleaseFormatType & { toStructuredData: (props: MusicReleaseFormatTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
