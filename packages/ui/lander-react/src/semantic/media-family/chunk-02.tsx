import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, firstImage, quantitativeValueReference, thingReference } from "../shared.js";

type VideoObjectStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VideoObjectStructuredData>["data"];
type ClipStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ClipStructuredData>["data"];
type BroadcastEventStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BroadcastEventStructuredData>["data"];
type ImageObjectStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ImageObjectStructuredData>["data"];
type MediaObjectStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MediaObjectStructuredData>["data"];
type MediaSubscriptionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MediaSubscriptionStructuredData>["data"];
type MovieStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MovieStructuredData>["data"];
type MusicAlbumStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MusicAlbumStructuredData>["data"];
type MusicCompositionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MusicCompositionStructuredData>["data"];
type MusicGroupStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MusicGroupStructuredData>["data"];
type MusicPlaylistStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MusicPlaylistStructuredData>["data"];
type MusicRecordingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MusicRecordingStructuredData>["data"];
type MusicReleaseStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MusicReleaseStructuredData>["data"];

export interface ImageObjectProps {
  name: string;
  description?: string;
  contentUrl?: string;
  width?: number;
  height?: number;
  caption?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ImageObjectStructuredDataInput>;
}

export function ImageObject(props: ImageObjectProps) {
  const base: ImageObjectStructuredDataInput = {
    name: props.name,
    description: props.description,
    contentUrl: props.contentUrl,
    width: quantitativeValueReference(props.width) as unknown as ImageObjectStructuredDataInput["width"],
    height: quantitativeValueReference(props.height) as unknown as ImageObjectStructuredDataInput["height"],
    caption: props.caption,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ImageObjectStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="image-object"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Image"}
        description={props.description}
        imageSrc={props.contentUrl}
        imageAlt={props.caption ?? props.name}
        meta={[
          props.width !== undefined ? { label: "Width", value: String(props.width) } : null,
          props.height !== undefined ? { label: "Height", value: String(props.height) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.caption ? <figcaption className="lander-semantic__figure-caption">{props.caption}</figcaption> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface MediaObjectProps {
  name: string;
  description?: string;
  contentUrl?: string;
  embedUrl?: string;
  encodingFormat?: string;
  uploadDate?: string;
  duration?: string;
  thumbnailUrl?: string | string[];
  transcript?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MediaObjectStructuredDataInput>;
}

export function MediaObject(props: MediaObjectProps) {
  const base: MediaObjectStructuredDataInput = {
    name: props.name,
    description: props.description,
    contentUrl: props.contentUrl,
    embedUrl: props.embedUrl,
    encodingFormat: props.encodingFormat,
    uploadDate: props.uploadDate,
    duration: props.duration,
    thumbnailUrl: props.thumbnailUrl,
    transcript: props.transcript,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MediaObjectStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="media-object"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Media object"}
        description={props.description}
        imageSrc={firstImage(props.thumbnailUrl)}
        imageAlt={props.name}
        meta={[
          props.encodingFormat ? { label: "Format", value: props.encodingFormat } : null,
          props.uploadDate ? { label: "Uploaded", value: props.uploadDate } : null,
          props.duration ? { label: "Duration", value: props.duration } : null,
          props.contentUrl ? { label: "Content", value: props.contentUrl } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.transcript ? <p>{props.transcript}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface MediaSubscriptionProps {
  name: string;
  description?: string;
  authenticatingAuthority?: string;
  expectsAcceptanceOf?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MediaSubscriptionStructuredDataInput>;
}

export function MediaSubscription(props: MediaSubscriptionProps) {
  const base: MediaSubscriptionStructuredDataInput = {
    name: props.name,
    description: props.description,
    expectsAcceptanceOf: props.expectsAcceptanceOf?.map((entry) => ({ "@type": "Offer", name: entry })) as MediaSubscriptionStructuredDataInput["expectsAcceptanceOf"],
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MediaSubscriptionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="media-subscription"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Media subscription"}
        description={props.description}
        meta={props.authenticatingAuthority ? [{ label: "Authority", value: props.authenticatingAuthority }] : undefined}
        body={
          <>
            {props.expectsAcceptanceOf?.length ? <div className="lander-semantic__media-subscription-terms">{bodyList(props.expectsAcceptanceOf)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
