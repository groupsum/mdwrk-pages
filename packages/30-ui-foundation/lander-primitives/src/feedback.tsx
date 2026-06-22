import React from "react";
import { PrimitiveBaseProps, PrimitiveTone, primitiveClass } from "./shared.js";

export interface FeedbackProps extends PrimitiveBaseProps {
  tone?: PrimitiveTone;
}

export function Badge({ className, children, tone = "neutral" }: FeedbackProps) {
  return <span className={primitiveClass("badge", className, tone)} data-mdwrk-primitive="badge">{children}</span>;
}

export function Pill({ className, children, tone = "neutral" }: FeedbackProps) {
  return <span className={primitiveClass("pill", className, tone)} data-mdwrk-primitive="pill">{children}</span>;
}

export interface AlertProps extends FeedbackProps {
  title?: React.ReactNode;
}

export function Alert({ className, children, tone = "neutral", title }: AlertProps) {
  return (
    <section className={primitiveClass("alert", className, tone)} data-mdwrk-primitive="alert" role="status">
      {title ? <strong className="mdwrk-primitive__title">{title}</strong> : null}
      {children}
    </section>
  );
}

export function Toast({ className, children, tone = "neutral", title }: AlertProps) {
  return (
    <section className={primitiveClass("toast", className, tone)} data-mdwrk-primitive="toast" role="status">
      {title ? <strong className="mdwrk-primitive__title">{title}</strong> : null}
      {children}
    </section>
  );
}

export interface ProgressProps extends PrimitiveBaseProps {
  value?: number;
  max?: number;
  label?: string;
}

export function Progress({ className, value = 0, max = 100, label = "Progress" }: ProgressProps) {
  return <progress className={primitiveClass("progress", className)} data-mdwrk-primitive="progress" aria-label={label} value={value} max={max} />;
}

export function StatusDot({ className, tone = "neutral", children }: FeedbackProps) {
  return <span className={primitiveClass("status-dot", className, tone)} data-mdwrk-primitive="status-dot">{children}</span>;
}

export function Spinner({ className, label = "Loading" }: { className?: string; label?: string }) {
  return <span className={primitiveClass("spinner", className)} data-mdwrk-primitive="spinner" aria-label={label} role="status" />;
}

export function StarRating({ className, value = 0, max = 5, label = "Rating" }: { className?: string; value?: number; max?: number; label?: string }) {
  return (
    <div className={primitiveClass("star-rating", className)} data-mdwrk-primitive="star-rating" aria-label={label}>
      {Array.from({ length: max }, (_, index) => <span key={index} aria-hidden="true">{index < value ? "★" : "☆"}</span>)}
    </div>
  );
}

export function Bookmark({ className, active = false, children = "Bookmark" }: { className?: string; active?: boolean; children?: React.ReactNode }) {
  return <button type="button" className={primitiveClass("bookmark", className, active && "active")} data-mdwrk-primitive="bookmark" aria-pressed={active}>{children}</button>;
}

export function Favorite({ className, active = false, children = "Favorite" }: { className?: string; active?: boolean; children?: React.ReactNode }) {
  return <button type="button" className={primitiveClass("favorite", className, active && "active")} data-mdwrk-primitive="favorite" aria-pressed={active}>{children}</button>;
}
