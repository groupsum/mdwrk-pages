import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, firstImage, quantitativeValueReference, thingReference } from "./shared.js";

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

export interface MusicAlbumProps {
  name: string;
  description?: string;
  byArtist?: string[];
  tracks?: string[];
  numTracks?: number;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MusicAlbumStructuredDataInput>;
}

export interface MusicCompositionProps {
  name: string;
  description?: string;
  composer?: string[];
  lyricist?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MusicCompositionStructuredDataInput>;
}

export interface MusicGroupProps {
  name: string;
  description?: string;
  albums?: string[];
  tracks?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MusicGroupStructuredDataInput>;
}

export interface MusicPlaylistProps {
  name: string;
  description?: string;
  tracks?: string[];
  numTracks?: number;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MusicPlaylistStructuredDataInput>;
}

export interface MusicRecordingProps {
  name: string;
  description?: string;
  byArtist?: string[];
  inAlbum?: string[];
  duration?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MusicRecordingStructuredDataInput>;
}

export interface MusicReleaseProps {
  name: string;
  description?: string;
  catalogNumber?: string;
  musicReleaseFormat?: string;
  recordLabel?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MusicReleaseStructuredDataInput>;
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

export function MusicAlbum(props: MusicAlbumProps) {
  const base: MusicAlbumStructuredDataInput = {
    name: props.name,
    description: props.description,
    byArtist: props.byArtist?.map((item) => ({ "@type": "MusicGroup", name: item })),
    track: props.tracks?.map((item) => ({ "@type": "MusicRecording", name: item })),
    numTracks: props.numTracks,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MusicAlbumStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="music-album"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Music album"}
        description={props.description}
        meta={props.numTracks !== undefined ? [{ label: "Tracks", value: String(props.numTracks) }] : undefined}
        body={<>{props.byArtist?.length ? <div className="lander-semantic__cast-list">{bodyList(props.byArtist)}</div> : null}{props.tracks?.length ? <div className="lander-semantic__media-list">{bodyList(props.tracks)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function MusicComposition(props: MusicCompositionProps) {
  const base: MusicCompositionStructuredDataInput = {
    name: props.name,
    description: props.description,
    composer: props.composer?.map((item) => ({ "@type": "Person", name: item })),
    lyricist: props.lyricist?.map((item) => ({ "@type": "Person", name: item })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MusicCompositionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="music-composition"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Music composition"}
        description={props.description}
        body={<>{props.composer?.length ? <div className="lander-semantic__cast-list">{bodyList(props.composer)}</div> : null}{props.lyricist?.length ? <div className="lander-semantic__media-list">{bodyList(props.lyricist)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function MusicGroup(props: MusicGroupProps) {
  const base: MusicGroupStructuredDataInput = {
    name: props.name,
    description: props.description,
    album: props.albums?.map((item) => ({ "@type": "MusicAlbum", name: item })),
    track: props.tracks?.map((item) => ({ "@type": "MusicRecording", name: item })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MusicGroupStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="music-group"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Music group"}
        description={props.description}
        body={<>{props.albums?.length ? <div className="lander-semantic__media-list">{bodyList(props.albums)}</div> : null}{props.tracks?.length ? <div className="lander-semantic__cast-list">{bodyList(props.tracks)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function MusicPlaylist(props: MusicPlaylistProps) {
  const base: MusicPlaylistStructuredDataInput = {
    name: props.name,
    description: props.description,
    track: props.tracks?.map((item) => ({ "@type": "MusicRecording", name: item })),
    numTracks: props.numTracks,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MusicPlaylistStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="music-playlist"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Music playlist"}
        description={props.description}
        meta={props.numTracks !== undefined ? [{ label: "Tracks", value: String(props.numTracks) }] : undefined}
        body={<>{props.tracks?.length ? <div className="lander-semantic__media-list">{bodyList(props.tracks)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function MusicRecording(props: MusicRecordingProps) {
  const base: MusicRecordingStructuredDataInput = {
    name: props.name,
    description: props.description,
    byArtist: props.byArtist?.map((item) => ({ "@type": "MusicGroup", name: item })),
    inAlbum: props.inAlbum?.map((item) => ({ "@type": "MusicAlbum", name: item })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MusicRecordingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="music-recording"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Music recording"}
        description={props.description}
        meta={props.duration ? [{ label: "Duration", value: props.duration }] : undefined}
        body={<>{props.byArtist?.length ? <div className="lander-semantic__cast-list">{bodyList(props.byArtist)}</div> : null}{props.inAlbum?.length ? <div className="lander-semantic__media-list">{bodyList(props.inAlbum)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function MusicRelease(props: MusicReleaseProps) {
  const base: MusicReleaseStructuredDataInput = {
    name: props.name,
    description: props.description,
    catalogNumber: props.catalogNumber,
    recordLabel: props.recordLabel ? { "@type": "Organization", name: props.recordLabel } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MusicReleaseStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="music-release"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Music release"}
        description={props.description}
        meta={[
          props.catalogNumber ? { label: "Catalog", value: props.catalogNumber } : null,
          props.musicReleaseFormat ? { label: "Format", value: props.musicReleaseFormat } : null,
          props.recordLabel ? { label: "Label", value: props.recordLabel } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
