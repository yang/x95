// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 49"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M51.835 4.245C49.115 1.415 46.046 0 41.475 0s-9.6 2.168-13.474 8.976C24.12 2.168 19.094 0 14.525 0 9.956 0 6.876 1.416 4.165 4.245-.419 9.025-.989 14.649 1.333 20.462a34.27 34.27 0 004.757 8.163 52.385 52.385 0 003.433 4.004c2.873 3.046 6.995 7.066 10.187 9.71a505.75 505.75 0 008.262 6.63V49l.021-.016.019.016v-.031c.47-.369 5.224-4.12 8.262-6.63 3.2-2.644 7.314-6.664 10.188-9.71a55.655 55.655 0 003.435-4.004 34.26 34.26 0 004.754-8.163c2.34-5.813 1.779-11.437-2.816-16.217z"
        }
        fill={"#1F1F1F"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
