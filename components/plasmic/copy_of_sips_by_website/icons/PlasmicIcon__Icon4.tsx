// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "css-1wanwla-StyledQuotationV2Mark-StyledQuotationV2Mark e1fsodzl1"
      )}
      viewBox={"0 0 92.6 58.2"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        className={"cls-1"}
        d={
          "M0 58.2l5.31-29.95L26.55 0h15.93L28.89 25.27h11.89L35 58.2zm50.34 0l5.31-29.95L76.67 0H92.6L79.22 25.27h11.89L85.17 58.2z"
        }
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
