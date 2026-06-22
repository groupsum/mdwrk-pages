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
