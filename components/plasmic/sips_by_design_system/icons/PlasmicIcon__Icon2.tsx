// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 44"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M44.43 3.725C42.1 1.242 39.468 0 35.55 0c-3.918 0-8.228 1.903-11.549 7.877C20.674 1.903 16.366 0 12.45 0 8.534 0 5.894 1.242 3.57 3.725-.36 7.92-.848 12.856 1.143 17.957A30.25 30.25 0 005.22 25.12a45.716 45.716 0 002.942 3.515c2.463 2.673 5.996 6.2 8.732 8.52a435.814 435.814 0 007.083 5.819v.028l.017-.014.016.014v-.028c.403-.323 4.478-3.615 7.082-5.818 2.743-2.32 6.27-5.848 8.732-8.521a48.53 48.53 0 002.945-3.515 30.24 30.24 0 004.075-7.163C48.85 12.856 48.368 7.92 44.43 3.725z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
