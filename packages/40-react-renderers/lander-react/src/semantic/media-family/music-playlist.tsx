import React from "react";
import { MusicPlaylist as MusicPlaylistBase, type MusicPlaylistProps as MusicPlaylistBaseProps } from "./chunk-04.js";

export interface MusicPlaylistProps extends MusicPlaylistBaseProps {
  className?: string;
}

export function MusicPlaylist(props: MusicPlaylistProps) {
  return <MusicPlaylistBase {...props} />;
}
