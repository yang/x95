// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: mEp8Jgao0_XIAz
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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_sips_by_design_system_css from "../sips_by_design_system/plasmic_sips_by_design_system.module.css"; // plasmic-import: mrgn3VC2r6s7VB3wKPe7xp/projectcss
import projectcss from "./plasmic_copy_of_sips_by_website.module.css"; // plasmic-import: s9FtU1QqNRpfuTCYMk46sz/projectcss
import sty from "./PlasmicSectionFooterBlogPost.module.css"; // plasmic-import: mEp8Jgao0_XIAz/css

export type PlasmicSectionFooterBlogPost__VariantMembers = {};

export type PlasmicSectionFooterBlogPost__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionFooterBlogPost__VariantsArgs;
export const PlasmicSectionFooterBlogPost__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionFooterBlogPost__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  destination?: string;
};

type ArgPropType = keyof PlasmicSectionFooterBlogPost__ArgsType;
export const PlasmicSectionFooterBlogPost__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "destination"
);

export type PlasmicSectionFooterBlogPost__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  freeBox?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
};

export interface DefaultSectionFooterBlogPostProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  destination?: string;
  className?: string;
}

function PlasmicSectionFooterBlogPost__RenderFunc(props: {
  variants: PlasmicSectionFooterBlogPost__VariantsArgs;
  args: PlasmicSectionFooterBlogPost__ArgsType;
  overrides: PlasmicSectionFooterBlogPost__OverridesType;

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
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_sips_by_design_system_css.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__gkBHt)}
            displayHeight={"90px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"90px" as const}
            loading={"lazy" as const}
          />
        ),

        value: args.children
      })}

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <p className={classNames(projectcss.all, projectcss.p, sty.p__xpzg7)}>
          {p.renderPlasmicSlot({
            defaultContents: "Blog Name",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </p>

        <h4
          data-plasmic-name={"h4"}
          data-plasmic-override={overrides.h4}
          className={classNames(projectcss.all, projectcss.h4, sty.h4)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Title Goes Here and Then Make It a Link (<a>)",
            value: args.slot3,
            className: classNames(sty.slotTargetSlot3)
          })}
        </h4>

        <p className={classNames(projectcss.all, projectcss.p, sty.p__s39Tv)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Metus primis viverra quam lobortis orci, est tempus vulputate quis, porttitor iaculis integer adipiscing.Dapibus massa laoreet ipsum sodales pulvinar.",
            value: args.slot2,
            className: classNames(sty.slotTargetSlot2)
          })}
        </p>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h4"],
  freeBox: ["freeBox", "h4"],
  h4: ["h4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  freeBox: "div";
  h4: "h4";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionFooterBlogPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionFooterBlogPost__VariantsArgs;
    args?: PlasmicSectionFooterBlogPost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionFooterBlogPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionFooterBlogPost__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSectionFooterBlogPost__ArgProps,
          internalVariantPropNames: PlasmicSectionFooterBlogPost__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSectionFooterBlogPost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionFooterBlogPost";
  } else {
    func.displayName = `PlasmicSectionFooterBlogPost.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionFooterBlogPost = Object.assign(
  // Top-level PlasmicSectionFooterBlogPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),

    // Metadata about props expected for PlasmicSectionFooterBlogPost
    internalVariantProps: PlasmicSectionFooterBlogPost__VariantProps,
    internalArgProps: PlasmicSectionFooterBlogPost__ArgProps
  }
);

export default PlasmicSectionFooterBlogPost;
/* prettier-ignore-end */