import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, thingReference } from "./shared.js";

type ActionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ActionStructuredData>["data"];
type AdministrativeAreaStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AdministrativeAreaStructuredData>["data"];
type AggregateOfferStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AggregateOfferStructuredData>["data"];
type AlignmentObjectStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AlignmentObjectStructuredData>["data"];
type AudienceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AudienceStructuredData>["data"];
type AudioObjectStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AudioObjectStructuredData>["data"];

export interface ActionProps {
  name: string;
  description?: string;
  actionStatus?: string;
  target?: string;
  agent?: { name: string; url?: string };
  object?: string;
  result?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ActionStructuredDataInput>;
}

export interface AdministrativeAreaProps {
  name: string;
  description?: string;
  containedInPlace?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<AdministrativeAreaStructuredDataInput>;
}

export interface AggregateOfferProps {
  name: string;
  description?: string;
  lowPrice?: number | string;
  highPrice?: number | string;
  offerCount?: number;
  priceCurrency?: string;
  offers?: Array<{ name: string; price?: number | string; priceCurrency?: string }>;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<AggregateOfferStructuredDataInput>;
}

export interface AlignmentObjectProps {
  name: string;
  alignmentType?: string;
  educationalFramework?: string;
  targetName?: string;
  targetDescription?: string;
  targetUrl?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<AlignmentObjectStructuredDataInput>;
}

export interface AudienceProps {
  name: string;
  audienceType?: string;
  geographicArea?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<AudienceStructuredDataInput>;
}

export interface AudioObjectProps {
  name: string;
  description?: string;
  contentUrl?: string;
  uploadDate?: string;
  duration?: string;
  encodingFormat?: string;
  caption?: string;
  transcript?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<AudioObjectStructuredDataInput>;
}

export function Action(props: ActionProps) {
  const base: ActionStructuredDataInput = {
    name: props.name,
    description: props.description,
    actionStatus: props.actionStatus,
    target: props.target,
    agent: props.agent ? { "@type": "Person", name: props.agent.name, url: props.agent.url } : undefined,
    object: thingReference(props.object),
    result: thingReference(props.result),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ActionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="action"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Action"}
        description={props.description}
        meta={[
          props.actionStatus ? { label: "Status", value: props.actionStatus } : null,
          props.agent?.name ? { label: "Agent", value: props.agent.name } : null,
          props.target ? { label: "Target", value: props.target } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.object || props.result ? (
              <div className="lander-semantic__action-flow">
                {props.object ? <p className="lander-semantic__action-object">Object: {props.object}</p> : null}
                {props.result ? <p className="lander-semantic__action-result">Result: {props.result}</p> : null}
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function AdministrativeArea(props: AdministrativeAreaProps) {
  const base: AdministrativeAreaStructuredDataInput = {
    name: props.name,
    description: props.description,
    containedInPlace: props.containedInPlace ? { "@type": "Place", name: props.containedInPlace } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.AdministrativeAreaStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="administrative-area"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Administrative area"}
        description={props.description}
        meta={[
          props.containedInPlace ? { label: "Contained in", value: props.containedInPlace } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function AggregateOffer(props: AggregateOfferProps) {
  const offers = props.offers?.map((offer) => ({
    "@type": "Offer",
    name: offer.name,
    price: offer.price,
    priceCurrency: offer.priceCurrency ?? props.priceCurrency,
  }));
  const base: AggregateOfferStructuredDataInput = {
    name: props.name,
    description: props.description,
    lowPrice: props.lowPrice,
    highPrice: props.highPrice,
    offerCount: props.offerCount ?? props.offers?.length,
    offers,
    priceCurrency: props.priceCurrency,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.AggregateOfferStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="aggregate-offer"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Aggregate offer"}
        description={props.description}
        meta={[
          props.lowPrice !== undefined ? { label: "Low price", value: String(props.lowPrice) } : null,
          props.highPrice !== undefined ? { label: "High price", value: String(props.highPrice) } : null,
          (props.offerCount ?? props.offers?.length) !== undefined ? { label: "Offer count", value: String(props.offerCount ?? props.offers?.length) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.offers?.length ? <div className="lander-semantic__offer-stack">{bodyList(props.offers.map((offer) => `${offer.name}${offer.price !== undefined ? ` - ${offer.priceCurrency ?? props.priceCurrency ?? ""} ${offer.price}`.trim() : ""}`))}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function AlignmentObject(props: AlignmentObjectProps) {
  const base: AlignmentObjectStructuredDataInput = {
    name: props.name,
    alignmentType: props.alignmentType,
    educationalFramework: props.educationalFramework,
    targetName: props.targetName ?? props.name,
    targetDescription: props.targetDescription,
    targetUrl: props.targetUrl,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.AlignmentObjectStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="alignment-object"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Alignment"}
        meta={[
          props.alignmentType ? { label: "Alignment type", value: props.alignmentType } : null,
          props.educationalFramework ? { label: "Framework", value: props.educationalFramework } : null,
          props.targetName ? { label: "Target name", value: props.targetName } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.targetDescription ? <p className="lander-semantic__alignment-target">{props.targetDescription}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Audience(props: AudienceProps) {
  const base: AudienceStructuredDataInput = {
    name: props.name,
    audienceType: props.audienceType,
    geographicArea: props.geographicArea ? { "@type": "AdministrativeArea", name: props.geographicArea } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.AudienceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="audience"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Audience"}
        meta={[
          props.audienceType ? { label: "Audience type", value: props.audienceType } : null,
          props.geographicArea ? { label: "Geographic area", value: props.geographicArea } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function AudioObject(props: AudioObjectProps) {
  const base: AudioObjectStructuredDataInput = {
    name: props.name,
    description: props.description,
    contentUrl: props.contentUrl,
    uploadDate: props.uploadDate,
    duration: props.duration,
    encodingFormat: props.encodingFormat,
    caption: props.caption,
    transcript: props.transcript,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.AudioObjectStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="audio-object"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Audio"}
        description={props.description}
        meta={[
          props.uploadDate ? { label: "Uploaded", value: props.uploadDate } : null,
          props.duration ? { label: "Duration", value: props.duration } : null,
          props.encodingFormat ? { label: "Encoding", value: props.encodingFormat } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.caption ? <p className="lander-semantic__audio-caption">{props.caption}</p> : null}
            {props.transcript ? <div className="lander-semantic__audio-transcript">{props.transcript}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
