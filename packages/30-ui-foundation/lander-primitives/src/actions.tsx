import React from "react";
import { Icon } from "./media.js";
import { PrimitiveSize, PrimitiveTone, PrimitiveVariant, joinClassNames, primitiveClass } from "./shared.js";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PrimitiveVariant | "danger";
  tone?: PrimitiveTone;
  size?: PrimitiveSize;
  icon?: React.ReactNode;
  primitiveName?: string;
}

export function Button({
  className,
  children,
  variant = "secondary",
  tone,
  size = "md",
  icon,
  type = "button",
  primitiveName = "button",
  ...props
}: ButtonProps) {
  const visualVariant: PrimitiveVariant = variant === "danger" ? "secondary" : variant;
  const semanticTone: PrimitiveTone | undefined = tone ?? (variant === "danger" ? "danger" : undefined);
  return (
    <button
      {...props}
      type={type}
      className={joinClassNames(
        primitiveClass("button", undefined, visualVariant, semanticTone, size),
        primitiveName !== "button" ? primitiveClass(primitiveName, undefined, visualVariant, semanticTone, size) : undefined,
        className,
      )}
      data-mdwrk-primitive={primitiveName}
      data-mdwrk-tone={semanticTone}
      data-mdwrk-variant={visualVariant}
    >
      {icon ? <span className="mdwrk-primitive__icon">{icon}</span> : null}
      {children}
    </button>
  );
}

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  label: string;
  iconName?: string;
  children?: React.ReactNode;
}

export function IconButton({ label, iconName, children, className, ...props }: IconButtonProps) {
  return (
    <Button {...props} primitiveName="icon-button" className={primitiveClass("icon-button", className)} aria-label={label}>
      {children ?? <Icon name={iconName} label={label} />}
    </Button>
  );
}

export function ButtonGroup({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={primitiveClass("button-group", className)} data-mdwrk-primitive="button-group" role="group">{children}</div>;
}

export function IconButtonGroup({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={primitiveClass("icon-button-group", className)} data-mdwrk-primitive="icon-button-group" role="group">{children}</div>;
}

export function Toolbar({ className, children, "aria-label": ariaLabel = "Toolbar", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={primitiveClass("toolbar", className)} data-mdwrk-primitive="toolbar" role="toolbar" aria-label={ariaLabel}>{children}</div>;
}

export function ActionRail({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <aside {...props} className={primitiveClass("action-rail", className)} data-mdwrk-primitive="action-rail">{children}</aside>;
}

export function Fab({ className, children, ...props }: ButtonProps) {
  return <Button {...props} primitiveName="fab" className={primitiveClass("fab", className)}>{children}</Button>;
}
