// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      )}
      focusable={"false"}
      aria-hidden={"true"}
      viewBox={"0 0 24 24"}
      data-testid={"ArrowBackIcon"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
