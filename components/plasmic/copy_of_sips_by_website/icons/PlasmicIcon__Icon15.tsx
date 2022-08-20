// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 68"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.293 67.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L8 65.586l-5.657-5.657A1 1 0 00.93 61.343l6.364 6.364zM7 0v67h2V0H7z"
        }
        fill={"#1F1F1F"}
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
