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

export interface EntryPointProps {
  name: string;
  description?: string;
  urlTemplate?: string;
  httpMethod?: string;
  contentType?: string;
  encodingType?: string;
  actionPlatform?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EntryPointStructuredDataInput>;
}

export function EntryPoint(props: EntryPointProps) {
  const base: EntryPointStructuredDataInput = {
    name: props.name,
    description: props.description,
    urlTemplate: props.urlTemplate,
    httpMethod: props.httpMethod,
    contentType: props.contentType,
    encodingType: props.encodingType,
    actionPlatform: props.actionPlatform,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EntryPointStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="entry-point"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Entry point"}
        description={props.description}
        meta={[
          props.urlTemplate ? { label: "URL template", value: props.urlTemplate } : null,
          props.httpMethod ? { label: "HTTP method", value: props.httpMethod } : null,
          props.contentType ? { label: "Content type", value: props.contentType } : null,
          props.encodingType ? { label: "Encoding", value: props.encodingType } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.actionPlatform?.length ? <div className="lander-semantic__entry-point-platforms">{bodyList(props.actionPlatform)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface GeoCoordinatesProps {
  name?: string;
  latitude?: number | string;
  longitude?: number | string;
  elevation?: number | string;
  addressCountry?: string;
  postalCode?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<GeoCoordinatesStructuredDataInput>;
}

export function GeoCoordinates(props: GeoCoordinatesProps) {
  const base: GeoCoordinatesStructuredDataInput = {
    name: props.name,
    latitude: props.latitude,
    longitude: props.longitude,
    elevation: props.elevation,
    addressCountry: props.addressCountry,
    postalCode: props.postalCode,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.GeoCoordinatesStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="geo-coordinates"
        title={props.name ?? "Geo coordinates"}
        eyebrow={props.viewModel?.eyebrow ?? "Geo coordinates"}
        meta={[
          props.latitude !== undefined ? { label: "Latitude", value: String(props.latitude) } : null,
          props.longitude !== undefined ? { label: "Longitude", value: String(props.longitude) } : null,
          props.elevation !== undefined ? { label: "Elevation", value: String(props.elevation) } : null,
          props.addressCountry ? { label: "Country", value: props.addressCountry } : null,
          props.postalCode ? { label: "Postal code", value: props.postalCode } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface GeoShapeProps {
  name?: string;
  box?: string;
  circle?: string;
  line?: string;
  polygon?: string;
  elevation?: number | string;
  addressCountry?: string;
  postalCode?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<GeoShapeStructuredDataInput>;
}

export function GeoShape(props: GeoShapeProps) {
  const base: GeoShapeStructuredDataInput = {
    name: props.name,
    box: props.box,
    circle: props.circle,
    line: props.line,
    polygon: props.polygon,
    elevation: props.elevation,
    addressCountry: props.addressCountry,
    postalCode: props.postalCode,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.GeoShapeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="geo-shape"
        title={props.name ?? "Geo shape"}
        eyebrow={props.viewModel?.eyebrow ?? "Geo shape"}
        meta={[
          props.box ? { label: "Box", value: props.box } : null,
          props.circle ? { label: "Circle", value: props.circle } : null,
          props.line ? { label: "Line", value: props.line } : null,
          props.polygon ? { label: "Polygon", value: props.polygon } : null,
          props.elevation !== undefined ? { label: "Elevation", value: String(props.elevation) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
