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
