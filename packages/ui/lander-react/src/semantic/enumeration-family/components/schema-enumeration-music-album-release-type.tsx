import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface MusicAlbumReleaseTypeProps extends GeneratedEnumerationProps<string> {}

export function MusicAlbumReleaseType({ value, description = "The kind of release which this album is: single, EP or album.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MusicAlbumReleaseTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MusicAlbumReleaseTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-music-album-release-type",
    shellClassName: "lander-semantic--schema-enumeration-music-album-release-type",
    title: "MusicAlbumReleaseType",
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
