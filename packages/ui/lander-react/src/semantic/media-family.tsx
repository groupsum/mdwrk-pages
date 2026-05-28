import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, firstImage } from "./shared.js";

type VideoObjectStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VideoObjectStructuredData>["data"];
type ClipStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ClipStructuredData>["data"];
type BroadcastEventStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BroadcastEventStructuredData>["data"];
type ImageObjectStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ImageObjectStructuredData>["data"];
type MovieStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MovieStructuredData>["data"];

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

export interface MovieProps {
  name: string;
  description?: string;
  director?: { name: string };
  actor?: Array<{ name: string }>;
  datePublished?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MovieStructuredDataInput>;
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

export function ImageObject(props: ImageObjectProps) {
  const base: ImageObjectStructuredDataInput = {
    name: props.name,
    description: props.description,
    contentUrl: props.contentUrl,
    width: props.width,
    height: props.height,
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

export function Movie(props: MovieProps) {
  const base: MovieStructuredDataInput = {
    name: props.name,
    description: props.description,
    director: props.director ? { "@type": "Person", name: props.director.name } : undefined,
    actor: props.actor?.map((item) => ({ "@type": "Person", name: item.name })),
    datePublished: props.datePublished,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MovieStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="movie"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Movie"}
        description={props.description}
        meta={[
          props.director?.name ? { label: "Director", value: props.director.name } : null,
          props.datePublished ? { label: "Published", value: props.datePublished } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.actor?.length ? <div className="lander-semantic__cast-list">{bodyList(props.actor.map((item) => item.name))}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
