import React from "react";
import { PrimitiveBaseProps, primitiveClass } from "./shared.js";

type DivProps = PrimitiveBaseProps & React.HTMLAttributes<HTMLDivElement>;

export function Stack({ className, children, ...props }: DivProps) {
  return <div {...props} className={primitiveClass("stack", className)} data-mdwrk-primitive="stack">{children}</div>;
}

export function Cluster({ className, children, ...props }: DivProps) {
  return <div {...props} className={primitiveClass("cluster", className)} data-mdwrk-primitive="cluster">{children}</div>;
}

export function Split({ className, children, ...props }: DivProps) {
  return <div {...props} className={primitiveClass("split", className)} data-mdwrk-primitive="split">{children}</div>;
}

export function Grid({ className, children, ...props }: DivProps) {
  return <div {...props} className={primitiveClass("grid", className)} data-mdwrk-primitive="grid">{children}</div>;
}

export function Pane({ className, children, ...props }: DivProps) {
  return <div {...props} className={primitiveClass("pane", className)} data-mdwrk-primitive="pane">{children}</div>;
}

export function Surface({ className, children, ...props }: DivProps) {
  return <div {...props} className={primitiveClass("surface", className)} data-mdwrk-primitive="surface">{children}</div>;
}

export function Gutter({ className, children, ...props }: DivProps) {
  return <div {...props} className={primitiveClass("gutter", className)} data-mdwrk-primitive="gutter">{children}</div>;
}
