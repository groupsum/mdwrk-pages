import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "./shared.js";

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

export interface BroadcastChannelProps {
  name: string;
  description?: string;
  broadcastChannelId?: string;
  inBroadcastLineup?: string;
  providesBroadcastService?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<BroadcastChannelStructuredDataInput>;
}

export interface BroadcastFrequencySpecificationProps {
  name: string;
  description?: string;
  broadcastFrequencyValue?: number | string;
  broadcastSignalModulation?: string;
  subtitleLanguage?: string;
  videoFormat?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<BroadcastFrequencySpecificationStructuredDataInput>;
}

export interface BroadcastServiceProps {
  name: string;
  description?: string;
  broadcastDisplayName?: string;
  areaServed?: string;
  broadcaster?: string;
  channels?: string[];
  parentService?: string;
  provider?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<BroadcastServiceStructuredDataInput>;
}

export interface CableOrSatelliteServiceProps {
  name: string;
  description?: string;
  areaServed?: string;
  provider?: string;
  serviceLocation?: string;
  hasOfferCatalog?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CableOrSatelliteServiceStructuredDataInput>;
}

export interface CivicStructureProps {
  name: string;
  description?: string;
  openingHours?: string[];
  publicAccess?: boolean;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CivicStructureStructuredDataInput>;
}

export interface ConstraintNodeProps {
  name: string;
  description?: string;
  constraintProperty?: string;
  numConstraints?: number;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ConstraintNodeStructuredDataInput>;
}

export interface CreditCardProps {
  name: string;
  description?: string;
  interestRate?: number | string;
  feesAndCommissionsSpecification?: string;
  monthlyMinimumRepaymentAmount?: string;
  cashBack?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CreditCardStructuredDataInput>;
}

export interface CssSelectorTypeProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CssSelectorTypeStructuredDataInput>;
}

export interface DistanceProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DistanceStructuredDataInput>;
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

export function BroadcastChannel(props: BroadcastChannelProps) {
  const base: BroadcastChannelStructuredDataInput = {
    name: props.name,
    description: props.description,
    broadcastChannelId: props.broadcastChannelId,
    inBroadcastLineup: ref("ItemList", props.inBroadcastLineup),
    providesBroadcastService: ref("BroadcastService", props.providesBroadcastService),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.BroadcastChannelStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="broadcast-channel"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Broadcast channel"}
        description={props.description}
        meta={[
          props.broadcastChannelId ? { label: "Channel ID", value: props.broadcastChannelId } : null,
          props.inBroadcastLineup ? { label: "Lineup", value: props.inBroadcastLineup } : null,
          props.providesBroadcastService ? { label: "Service", value: props.providesBroadcastService } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function BroadcastFrequencySpecification(props: BroadcastFrequencySpecificationProps) {
  const base: BroadcastFrequencySpecificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    broadcastFrequencyValue: props.broadcastFrequencyValue,
    broadcastSignalModulation: props.broadcastSignalModulation,
    subtitleLanguage: props.subtitleLanguage,
    videoFormat: props.videoFormat,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.BroadcastFrequencySpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="broadcast-frequency-specification"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Broadcast frequency"}
        description={props.description}
        meta={[
          props.broadcastFrequencyValue !== undefined ? { label: "Frequency", value: String(props.broadcastFrequencyValue) } : null,
          props.broadcastSignalModulation ? { label: "Modulation", value: props.broadcastSignalModulation } : null,
          props.subtitleLanguage ? { label: "Subtitle language", value: props.subtitleLanguage } : null,
          props.videoFormat ? { label: "Video format", value: props.videoFormat } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function BroadcastService(props: BroadcastServiceProps) {
  const base: BroadcastServiceStructuredDataInput = {
    name: props.name,
    description: props.description,
    broadcastDisplayName: props.broadcastDisplayName,
    areaServed: ref("AdministrativeArea", props.areaServed),
    broadcaster: ref("Organization", props.broadcaster),
    hasBroadcastChannel: props.channels?.map((entry) => ref("BroadcastChannel", entry)),
    parentService: ref("BroadcastService", props.parentService),
    provider: ref("Organization", props.provider),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.BroadcastServiceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="broadcast-service"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Broadcast service"}
        description={props.description}
        meta={[
          props.broadcastDisplayName ? { label: "Display name", value: props.broadcastDisplayName } : null,
          props.areaServed ? { label: "Area served", value: props.areaServed } : null,
          props.broadcaster ? { label: "Broadcaster", value: props.broadcaster } : null,
          props.provider ? { label: "Provider", value: props.provider } : null,
          props.parentService ? { label: "Parent service", value: props.parentService } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.channels?.length ? <div className="lander-semantic__broadcast-service-channels">{bodyList(props.channels)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CableOrSatelliteService(props: CableOrSatelliteServiceProps) {
  const base: CableOrSatelliteServiceStructuredDataInput = {
    name: props.name,
    description: props.description,
    areaServed: ref("AdministrativeArea", props.areaServed),
    provider: ref("Organization", props.provider),
    serviceLocation: ref("Place", props.serviceLocation),
    hasOfferCatalog: ref("OfferCatalog", props.hasOfferCatalog),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CableOrSatelliteServiceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="cable-or-satellite-service"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Cable or satellite service"}
        description={props.description}
        meta={[
          props.areaServed ? { label: "Area served", value: props.areaServed } : null,
          props.provider ? { label: "Provider", value: props.provider } : null,
          props.serviceLocation ? { label: "Service location", value: props.serviceLocation } : null,
          props.hasOfferCatalog ? { label: "Offer catalog", value: props.hasOfferCatalog } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CivicStructure(props: CivicStructureProps) {
  const base: CivicStructureStructuredDataInput = {
    name: props.name,
    description: props.description,
    openingHours: props.openingHours,
    publicAccess: props.publicAccess,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CivicStructureStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="civic-structure"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Civic structure"}
        description={props.description}
        meta={props.publicAccess !== undefined ? [{ label: "Public access", value: props.publicAccess ? "Open" : "Restricted" }] : undefined}
        body={
          <>
            {props.openingHours?.length ? <div className="lander-semantic__civic-structure-hours">{bodyList(props.openingHours)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ConstraintNode(props: ConstraintNodeProps) {
  const base: ConstraintNodeStructuredDataInput = {
    name: props.name,
    description: props.description,
    constraintProperty: props.constraintProperty,
    numConstraints: props.numConstraints,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ConstraintNodeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="constraint-node"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Constraint node"}
        description={props.description}
        meta={[
          props.constraintProperty ? { label: "Constraint property", value: props.constraintProperty } : null,
          props.numConstraints !== undefined ? { label: "Constraints", value: String(props.numConstraints) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CreditCard(props: CreditCardProps) {
  const base: CreditCardStructuredDataInput = {
    name: props.name,
    description: props.description,
    interestRate: props.interestRate,
    feesAndCommissionsSpecification: props.feesAndCommissionsSpecification,
    monthlyMinimumRepaymentAmount: ref("MonetaryAmount", props.monthlyMinimumRepaymentAmount),
    cashBack: ref("MonetaryAmount", props.cashBack),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CreditCardStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="credit-card"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Credit card"}
        description={props.description}
        meta={[
          props.interestRate !== undefined ? { label: "Interest rate", value: String(props.interestRate) } : null,
          props.monthlyMinimumRepaymentAmount ? { label: "Minimum repayment", value: props.monthlyMinimumRepaymentAmount } : null,
          props.cashBack ? { label: "Cash back", value: props.cashBack } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.feesAndCommissionsSpecification ? <p>{props.feesAndCommissionsSpecification}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CssSelectorType(props: CssSelectorTypeProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CssSelectorTypeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="css-selector-type"
        title={props.label ?? "CSS selector"}
        eyebrow={props.viewModel?.eyebrow ?? "CSS selector"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Distance(props: DistanceProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DistanceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="distance"
        title={props.label ?? "Distance"}
        eyebrow={props.viewModel?.eyebrow ?? "Distance"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
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
