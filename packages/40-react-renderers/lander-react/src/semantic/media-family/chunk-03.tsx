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
