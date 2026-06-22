import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "../shared.js";

type BroadcastChannelStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BroadcastChannelStructuredData>["data"];
type BroadcastFrequencySpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BroadcastFrequencySpecificationStructuredData>["data"];
type BroadcastServiceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BroadcastServiceStructuredData>["data"];
type CableOrSatelliteServiceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CableOrSatelliteServiceStructuredData>["data"];
type CivicStructureStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CivicStructureStructuredData>["data"];
type ConstraintNodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ConstraintNodeStructuredData>["data"];
type CreditCardStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CreditCardStructuredData>["data"];
type CssSelectorTypeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CssSelectorTypeStructuredData>["data"];
type DistanceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DistanceStructuredData>["data"];
type EntryPointStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EntryPointStructuredData>["data"];
type GeoCoordinatesStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GeoCoordinatesStructuredData>["data"];
type GeospatialGeometryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GeospatialGeometryStructuredData>["data"];
type GeoShapeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GeoShapeStructuredData>["data"];

type NamedRef = { name: string; url?: string };

function ref(type: string, value?: NamedRef | string) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": type, name: value };
  return { "@type": type, name: value.name, url: value.url };
}

export interface GeospatialGeometryProps {
  name?: string;
  description?: string;
  geoContains?: string;
  geoCoveredBy?: string;
  geoCovers?: string;
  geoIntersects?: string;
  geoTouches?: string;
  geoWithin?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<GeospatialGeometryStructuredDataInput>;
}

export function GeospatialGeometry(props: GeospatialGeometryProps) {
  const base: GeospatialGeometryStructuredDataInput = {
    name: props.name,
    description: props.description,
    geoContains: ref("Place", props.geoContains),
    geoCoveredBy: ref("Place", props.geoCoveredBy),
    geoCovers: ref("Place", props.geoCovers),
    geoIntersects: ref("Place", props.geoIntersects),
    geoTouches: ref("Place", props.geoTouches),
    geoWithin: ref("Place", props.geoWithin),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.GeospatialGeometryStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="geospatial-geometry"
        title={props.name ?? "Geospatial geometry"}
        eyebrow={props.viewModel?.eyebrow ?? "Geospatial geometry"}
        description={props.description}
        meta={[
          props.geoContains ? { label: "Contains", value: props.geoContains } : null,
          props.geoCoveredBy ? { label: "Covered by", value: props.geoCoveredBy } : null,
          props.geoCovers ? { label: "Covers", value: props.geoCovers } : null,
          props.geoIntersects ? { label: "Intersects", value: props.geoIntersects } : null,
          props.geoTouches ? { label: "Touches", value: props.geoTouches } : null,
          props.geoWithin ? { label: "Within", value: props.geoWithin } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
