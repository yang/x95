// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon24Icon(props: Icon24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 10"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.58 6.3l-4.1 2.78L.34 6.3V4.56l4.14 2.62 4.1-2.62V6.3zM5.2 7.58H3.74V.34H5.2v7.24z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon24Icon;
/* prettier-ignore-end */
