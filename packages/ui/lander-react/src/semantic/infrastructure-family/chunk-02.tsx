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
