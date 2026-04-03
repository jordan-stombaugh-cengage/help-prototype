import React from "react";
import { Button as MagmaButton } from "react-magma-dom";

export type ButtonProps = React.ComponentProps<typeof MagmaButton>;

export function Button(props: ButtonProps) {
  return <MagmaButton {...props} />;
}
