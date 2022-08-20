// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 103 110"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M64.69 64.335c.824 12.014.36 23.873.43 35.784 0 1.905.188 3.827.343 5.732a2.197 2.197 0 01-1.717 2.317 1.93 1.93 0 01-1.523-.305 1.927 1.927 0 01-.81-1.325 51.108 51.108 0 01-.464-5.818c0-7.7.086-15.412.257-23.135.086-4.257.36-8.582.532-12.787v-.309h-9.37c.24 1.717.6 3.296.669 4.909.12 3.432 0 6.745 0 10.109v24.13c.06 1.081.06 2.164 0 3.244a1.51 1.51 0 01-1.716 1.493 1.719 1.719 0 01-1.837-1.51 33.585 33.585 0 01-.48-4.72c0-8.272.091-16.539.274-24.8 0-3.106.275-6.213.43-9.302-.172 0-.258-.086-.275 0-3.227 3.433-7.415 4.737-11.774 5.698a92.987 92.987 0 01-22.638 2.317 24.028 24.028 0 01-8.581-1.425 14.088 14.088 0 01-3.965-2.574 4.153 4.153 0 01-1.184-4.702c.043-.187.043-.38 0-.567a3.433 3.433 0 012.025-4.084 15.88 15.88 0 015.887-1.597l4.977-.738c0-3.776-.274-7.483-.223-11.173.086-4.994.223-9.988.601-14.965a23.512 23.512 0 013.364-10.401 17.162 17.162 0 0110.555-7.792c4.53-1.27 9.13-.892 13.73-.858 3.759 0 7.535.206 11.31.309h.876c0-1.716.12-3.433.257-5.149.137-1.716.395-3.535.6-5.303 0-.55 0-1.373.31-1.596a4.874 4.874 0 012.368-.841c4.428-.258 8.856-.43 13.284-.601.463-.001.924.057 1.373.172a2.42 2.42 0 011.716 3.981c-.446.738-1.012 1.39-1.579 2.163l1.837 1.373c.465.31.907.654 1.321 1.03a1.957 1.957 0 01-.223 3.106 6.865 6.865 0 01-4.033 1.219c-2.403.188-4.806.274-7.226.412a10.27 10.27 0 00-2.248.377l4.909.206c4.634.189 9.267.292 13.884.6 10.607.704 16.545 6.677 19.154 16.082a57.716 57.716 0 011.716 13.147c.172 4.6.189 9.2.292 13.73a2.608 2.608 0 01-1.304 2.231c-1.717 1.442-3.69 1.15-5.63 1.219l-30.138 1.201-.343.086zm32.918-5.544c.007-.12.007-.24 0-.36-.206-6.213-.257-12.426-.652-18.622a27.717 27.717 0 00-3.003-11.241 13.577 13.577 0 00-9.097-7.483 33.394 33.394 0 00-5.68-.858c-6.3-.326-12.615-.532-18.88-.79H58.1v5.15a1.201 1.201 0 00.823 1.338 5.028 5.028 0 013.33 4.617 5.938 5.938 0 01-11.087 2.454c1.15 9.474.36 18.724.292 27.803l46.15-2.008zm-50.51 1.991V37.767a24.405 24.405 0 00-2.608-10.915 13.335 13.335 0 00-15.721-6.866c-5.27 1.476-8.17 5.15-9.663 10.298a44.624 44.624 0 00-1.39 11.67c-.172 6.18-.258 12.358-.378 18.52l29.76.308zm-6.865 3.828v-.412h-5.577c-3.605 0-7.209 0-10.796-.086a33.748 33.748 0 01-7.483-.67 9.746 9.746 0 00-4.222 0c-1.154.149-2.3.355-3.432.618-1.339.344-2.643.79-3.948 1.253a.977.977 0 00-.532.704.944.944 0 00.704.583c1.2.171 2.41.275 3.621.31 2.883 0 5.767-.12 8.582 0a86.81 86.81 0 0018.879-1.322 43.578 43.578 0 014.204-.978zM70.08 5.69H57.74l.43 6.71 12.408-1.03-1.613-.72a1.836 1.836 0 01-.515-3.21c.515-.566.96-1.184 1.682-1.819l-.052.069zM43.46 18.837a23.324 23.324 0 017.192 12.34 4.687 4.687 0 011.94-3.982c1.527-.807 1.475-1.94 1.441-3.244v-4.702l-10.572-.412zm.653 48.656l-.652.137a102.617 102.617 0 01-15.79 2.729c-4.348.364-8.72.323-13.06-.12-3.605-.326-7.278.446-10.865-.721a5.716 5.716 0 002.18 1.562 28.403 28.403 0 006.247 1.338 92.178 92.178 0 0025.11-2.162 19.357 19.357 0 006.882-2.832l-.052.069zm12.014-35.527c.927 0 1.716-.584 1.716-1.253 0-.67-.892-1.081-1.956-1.167-1.064-.086-1.184.584-1.305 1.27-.12.687.704 1.064 1.648 1.081l-.103.07z"
        }
        fill={"#1F1F1F"}
        stroke={"#FDCC9B"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M26.71 37.252a4.391 4.391 0 00-3.433 1.442 4.771 4.771 0 00-.961 5.44 11.32 11.32 0 001.613 2.747c.36.472.743.924 1.15 1.355a47.061 47.061 0 003.433 3.261l2.78 2.232 2.78-2.232a47.315 47.315 0 003.433-3.26c.395-.447.79-.893 1.15-1.356a11.29 11.29 0 001.596-2.746 4.77 4.77 0 00-.944-5.441 4.446 4.446 0 00-3.433-1.442 5.148 5.148 0 00-4.53 3.021 5.148 5.148 0 00-4.531-3.02"
        }
        fill={"#1F1F1F"}
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */