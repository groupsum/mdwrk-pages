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

export interface VideoObjectProps {
  name: string;
  description?: string;
  thumbnailUrl: string | string[];
  uploadDate: string;
  duration?: string;
  embedUrl?: string;
  contentUrl?: string;
  clip?: Array<{ name: string; startOffset?: number; endOffset?: number }>;
  publication?: Array<{ name: string; startDate?: string; endDate?: string; isLiveBroadcast?: boolean }>;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<VideoObjectStructuredDataInput>;
}

export function VideoObject(props: VideoObjectProps) {
  const base: VideoObjectStructuredDataInput = {
    name: props.name,
    description: props.description,
    thumbnailUrl: props.thumbnailUrl,
    uploadDate: props.uploadDate,
    duration: props.duration,
    embedUrl: props.embedUrl,
    contentUrl: props.contentUrl,
    clip: props.clip?.map((item) => ({ "@type": "Clip", ...item })),
    publication: props.publication?.map((item) => ({ "@type": "BroadcastEvent", ...item })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.VideoObjectStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="video-object"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Video"}
        description={props.description}
        imageSrc={firstImage(Array.isArray(props.thumbnailUrl) ? props.thumbnailUrl : [props.thumbnailUrl])}
        imageAlt={props.name}
        meta={[
          { label: "Uploaded", value: props.uploadDate },
          props.duration ? { label: "Duration", value: props.duration } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.duration ? (
              <div className="lander-semantic__media-stat">
                <span className="lander-semantic__media-stat-label">Runtime</span>
                <strong className="lander-semantic__media-stat-value">{props.duration}</strong>
              </div>
            ) : null}
            {props.clip?.length ? <div className="lander-semantic__media-list lander-semantic__clip-list">{bodyList(props.clip.map((item) => item.name))}</div> : null}
            {props.publication?.length ? (
              <div className="lander-semantic__media-list lander-semantic__publication-list">{bodyList(props.publication.map((item) => item.name))}</div>
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

export interface ClipProps {
  name: string;
  description?: string;
  startOffset?: number;
  endOffset?: number;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ClipStructuredDataInput>;
}

export function Clip(props: ClipProps) {
  const base: ClipStructuredDataInput = {
    name: props.name,
    description: props.description,
    startOffset: props.startOffset,
    endOffset: props.endOffset,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ClipStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="clip"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Clip"}
        description={props.description}
        meta={[
          props.startOffset !== undefined ? { label: "Start", value: String(props.startOffset) } : null,
          props.endOffset !== undefined ? { label: "End", value: String(props.endOffset) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.startOffset !== undefined || props.endOffset !== undefined) ? (
              <div className="lander-semantic__timeline-band">
                {props.startOffset !== undefined ? <span className="lander-semantic__timeline-point">Start {props.startOffset}</span> : null}
                {props.endOffset !== undefined ? <span className="lander-semantic__timeline-point">End {props.endOffset}</span> : null}
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

export interface BroadcastEventProps {
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  isLiveBroadcast?: boolean;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<BroadcastEventStructuredDataInput>;
}

export function BroadcastEvent(props: BroadcastEventProps) {
  const base: BroadcastEventStructuredDataInput = {
    name: props.name,
    description: props.description,
    startDate: props.startDate,
    endDate: props.endDate,
    isLiveBroadcast: props.isLiveBroadcast,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.BroadcastEventStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="broadcast-event"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Broadcast event"}
        description={props.description}
        meta={[
          props.startDate ? { label: "Starts", value: props.startDate } : null,
          props.endDate ? { label: "Ends", value: props.endDate } : null,
          props.isLiveBroadcast !== undefined ? { label: "Live", value: props.isLiveBroadcast ? "Yes" : "No" } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.isLiveBroadcast !== undefined ? (
              <div className="lander-semantic__live-badge">
                {props.isLiveBroadcast ? "Live broadcast" : "Scheduled broadcast"}
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
