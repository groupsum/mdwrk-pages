import React from "react";
import { PrimitiveBaseProps, primitiveClass } from "./shared.js";

export interface OverlayProps extends PrimitiveBaseProps {
  title?: React.ReactNode;
}

export interface ModalProps extends OverlayProps {
  footer?: React.ReactNode;
  open?: boolean;
}

export function Dialog({ className, title, children }: OverlayProps) {
  return <section className={primitiveClass("dialog", className)} data-mdwrk-primitive="dialog" role="dialog" aria-label={typeof title === "string" ? title : undefined}>{title ? <header>{title}</header> : null}{children}</section>;
}

export function Sheet({ className, title, children }: OverlayProps) {
  return <section className={primitiveClass("sheet", className)} data-mdwrk-primitive="sheet" role="dialog" aria-label={typeof title === "string" ? title : undefined}>{title ? <header>{title}</header> : null}{children}</section>;
}

export function Modal({ className, title, children, footer, open = true }: ModalProps) {
  return (
    <div className={primitiveClass("modal", className, open && "open")} data-mdwrk-primitive="modal" data-open={open ? "true" : "false"}>
      <div className="mdwrk-primitive__modal-backdrop" aria-hidden="true" />
      <section className="mdwrk-primitive__modal-surface" role="dialog" aria-modal="true" aria-label={typeof title === "string" ? title : undefined}>
        {title ? <header>{title}</header> : null}
        <div className="mdwrk-primitive__modal-body">{children}</div>
        {footer ? <footer>{footer}</footer> : null}
      </section>
    </div>
  );
}

export function Popover({ className, children }: PrimitiveBaseProps) {
  return <div className={primitiveClass("popover", className)} data-mdwrk-primitive="popover">{children}</div>;
}

export function Bubble({ className, children }: PrimitiveBaseProps) {
  return <div className={primitiveClass("bubble", className)} data-mdwrk-primitive="bubble">{children}</div>;
}

export function ConsoleFooter({ className, children }: PrimitiveBaseProps) {
  return <footer className={primitiveClass("console-footer", className)} data-mdwrk-primitive="console-footer">{children}</footer>;
}

export function Tooltip({ className, label, children }: PrimitiveBaseProps & { label: React.ReactNode }) {
  return (
    <span className={primitiveClass("tooltip", className)} data-mdwrk-primitive="tooltip">
      <span className="mdwrk-primitive__tooltip-trigger">{children ?? "Hover target"}</span>
      <span className="mdwrk-primitive__tooltip-bubble" role="tooltip">{label}</span>
    </span>
  );
}
