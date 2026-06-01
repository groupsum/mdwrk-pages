import React from "react";
import { MusicAlbum as MusicAlbumBase, type MusicAlbumProps as MusicAlbumBaseProps } from "./chunk-03.js";

export interface MusicAlbumProps extends MusicAlbumBaseProps {
  className?: string;
}

export function MusicAlbum(props: MusicAlbumProps) {
  return <MusicAlbumBase {...props} />;
}
