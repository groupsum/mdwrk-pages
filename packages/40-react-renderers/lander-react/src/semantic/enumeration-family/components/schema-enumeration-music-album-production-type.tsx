import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MusicAlbumProductionTypeProps extends GeneratedEnumerationProps<string> {}

export function MusicAlbumProductionType({ value, description = "Classification of the album by its type of content: soundtrack, live album, studio album, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MusicAlbumProductionTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MusicAlbumProductionTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-music-album-production-type",
    shellClassName: "lander-semantic--schema-enumeration-music-album-production-type",
    title: "MusicAlbumProductionType",
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

(MusicAlbumProductionType as typeof MusicAlbumProductionType & { toStructuredData: (props: MusicAlbumProductionTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
