// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: G0dDFZMI2dcQMU
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import SectionMySipsActivities from "../../SectionMySipsActivities"; // plasmic-import: 7XrQmznsPjUbll/component
import SectionMySipsStories from "../../SectionMySipsStories"; // plasmic-import: aSdGQnyD6ZTNx9/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_sips_by_design_system_css from "../sips_by_design_system/plasmic_sips_by_design_system.module.css"; // plasmic-import: mrgn3VC2r6s7VB3wKPe7xp/projectcss
import projectcss from "./plasmic_copy_of_sips_by_website.module.css"; // plasmic-import: s9FtU1QqNRpfuTCYMk46sz/projectcss
import sty from "./PlasmicUvMySipsContent.module.css"; // plasmic-import: G0dDFZMI2dcQMU/css

export type PlasmicUvMySipsContent__VariantMembers = {};

export type PlasmicUvMySipsContent__VariantsArgs = {};
type VariantPropType = keyof PlasmicUvMySipsContent__VariantsArgs;
export const PlasmicUvMySipsContent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicUvMySipsContent__ArgsType = {};
type ArgPropType = keyof PlasmicUvMySipsContent__ArgsType;
export const PlasmicUvMySipsContent__ArgProps = new Array<ArgPropType>();

export type PlasmicUvMySipsContent__OverridesType = {
  root?: p.Flex<"div">;
  sectionMySipsActivities?: p.Flex<typeof SectionMySipsActivities>;
  h2?: p.Flex<"h2">;
  sectionMySipsStories?: p.Flex<typeof SectionMySipsStories>;
};

export interface DefaultUvMySipsContentProps {}

function PlasmicUvMySipsContent__RenderFunc(props: {
  variants: PlasmicUvMySipsContent__VariantsArgs;
  args: PlasmicUvMySipsContent__ArgsType;
  overrides: PlasmicUvMySipsContent__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_sips_by_design_system_css.plasmic_tokens,
            sty.root
          )}
        >
          <SectionMySipsActivities
            data-plasmic-name={"sectionMySipsActivities"}
            data-plasmic-override={overrides.sectionMySipsActivities}
            className={classNames(
              "__wab_instance",
              sty.sectionMySipsActivities
            )}
          />

          <h2
            data-plasmic-name={"h2"}
            data-plasmic-override={overrides.h2}
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2
            )}
          >
            {"Tea Stories"}
          </h2>

          <SectionMySipsStories
            data-plasmic-name={"sectionMySipsStories"}
            data-plasmic-override={overrides.sectionMySipsStories}
            className={classNames("__wab_instance", sty.sectionMySipsStories)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sectionMySipsActivities", "h2", "sectionMySipsStories"],
  sectionMySipsActivities: ["sectionMySipsActivities"],
  h2: ["h2"],
  sectionMySipsStories: ["sectionMySipsStories"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionMySipsActivities: typeof SectionMySipsActivities;
  h2: "h2";
  sectionMySipsStories: typeof SectionMySipsStories;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUvMySipsContent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUvMySipsContent__VariantsArgs;
    args?: PlasmicUvMySipsContent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUvMySipsContent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUvMySipsContent__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicUvMySipsContent__ArgProps,
          internalVariantPropNames: PlasmicUvMySipsContent__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUvMySipsContent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUvMySipsContent";
  } else {
    func.displayName = `PlasmicUvMySipsContent.${nodeName}`;
  }
  return func;
}

export const PlasmicUvMySipsContent = Object.assign(
  // Top-level PlasmicUvMySipsContent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionMySipsActivities: makeNodeComponent("sectionMySipsActivities"),
    h2: makeNodeComponent("h2"),
    sectionMySipsStories: makeNodeComponent("sectionMySipsStories"),

    // Metadata about props expected for PlasmicUvMySipsContent
    internalVariantProps: PlasmicUvMySipsContent__VariantProps,
    internalArgProps: PlasmicUvMySipsContent__ArgProps
  }
);

export default PlasmicUvMySipsContent;
/* prettier-ignore-end */
