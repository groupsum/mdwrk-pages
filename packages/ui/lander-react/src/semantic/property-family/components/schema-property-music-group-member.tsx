import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicGroupMemberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMusicGroupMember({ value, description = "A member of a music group&#x2014;for example, John, Paul, George, or Ringo.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMusicGroupMemberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MusicGroupMemberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-music-group-member",
    shellClassName: "lander-semantic--schema-property-music-group-member",
    title: "musicGroupMember",
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
