import React from "react";
import { PrimitiveBaseProps, PrimitiveSize, primitiveClass } from "./shared.js";

export interface IconProps extends PrimitiveBaseProps {
  name?: string;
  label?: string;
  decorative?: boolean;
  size?: PrimitiveSize;
}

export function Icon({ className, name, label, decorative = !label, size = "md", children }: IconProps) {
  return (
    <span
      className={primitiveClass("icon", className, size)}
      data-mdwrk-primitive="icon"
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : "img"}
    >
      {children ?? name}
    </span>
  );
}

export interface MediaFrameProps extends PrimitiveBaseProps {
  src?: string;
  alt?: string;
  title?: string;
}

export function ImageFrame({ className, src, alt = "", children }: MediaFrameProps) {
  return <figure className={primitiveClass("image-frame", className)} data-mdwrk-primitive="image-frame">{src ? <img src={src} alt={alt} /> : children}</figure>;
}

export function VideoFrame({ className, src, title = "Video", children }: MediaFrameProps) {
  return <figure className={primitiveClass("video-frame", className)} data-mdwrk-primitive="video-frame">{src ? <video src={src} title={title} controls /> : children}</figure>;
}

export function AudioPlayer({ className, src, title = "Audio", children }: MediaFrameProps) {
  return <figure className={primitiveClass("audio-player", className)} data-mdwrk-primitive="audio-player">{src ? <audio src={src} title={title} controls /> : children}</figure>;
}

export function Gallery({ className, children }: PrimitiveBaseProps) {
  return <div className={primitiveClass("gallery", className)} data-mdwrk-primitive="gallery">{children}</div>;
}

export function IconGrid({ className, children }: PrimitiveBaseProps) {
  return <div className={primitiveClass("icon-grid", className)} data-mdwrk-primitive="icon-grid">{children}</div>;
}

export interface MapPrimitiveBaseProps extends PrimitiveBaseProps {
  title?: string;
}

export function Map({ className, title = "Map", children }: MapPrimitiveBaseProps) {
  return (
    <figure className={primitiveClass("map", className)} data-mdwrk-primitive="map" aria-label={title}>
      <svg viewBox="0 0 320 180" role="img" aria-label={title}>
        <rect x="0" y="0" width="320" height="180" rx="18" />
        <path d="M20 40 H300" />
        <path d="M20 90 H300" />
        <path d="M20 140 H300" />
        <path d="M80 20 V160" />
        <path d="M160 20 V160" />
        <path d="M240 20 V160" />
      </svg>
      {children ? <figcaption>{children}</figcaption> : null}
    </figure>
  );
}

export function MapPoint({ className, label = "Point" }: { className?: string; label?: React.ReactNode }) {
  return <span className={primitiveClass("map-point", className)} data-mdwrk-primitive="map-point">{label}</span>;
}

export function MapPath({ className, label = "Route" }: { className?: string; label?: React.ReactNode }) {
  return <span className={primitiveClass("map-path", className)} data-mdwrk-primitive="map-path">{label}</span>;
}

export function MapBox({ className, label = "Viewport" }: { className?: string; label?: React.ReactNode }) {
  return <span className={primitiveClass("map-box", className)} data-mdwrk-primitive="map-box">{label}</span>;
}

export function MapBeacon({ className, label = "Beacon" }: { className?: string; label?: React.ReactNode }) {
  return <span className={primitiveClass("map-beacon", className)} data-mdwrk-primitive="map-beacon">{label}</span>;
}
