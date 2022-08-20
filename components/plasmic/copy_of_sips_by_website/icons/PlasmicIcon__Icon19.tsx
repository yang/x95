// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
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
      data-testid={"ChevronRightIcon"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
