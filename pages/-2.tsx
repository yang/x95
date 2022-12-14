// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/copy_of_sips_by_website/PlasmicGlobalVariant__Screen";
import { PlasmicZHome5242022 } from "../components/plasmic/copy_of_sips_by_website/PlasmicZHome5242022";
import { useRouter } from "next/router";

function ZHome5242022() {
  // Use PlasmicZHome5242022 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicZHome5242022 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicZHome5242022 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
      <PlasmicZHome5242022 />
    </ph.PageParamsProvider>
  );
}

export default ZHome5242022;
