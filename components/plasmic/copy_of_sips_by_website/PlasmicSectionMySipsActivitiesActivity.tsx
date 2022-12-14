// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: hQ6fAIEooJwJNK
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
import sty from "./PlasmicSectionMySipsActivitiesActivity.module.css"; // plasmic-import: hQ6fAIEooJwJNK/css

export type PlasmicSectionMySipsActivitiesActivity__VariantMembers = {};

export type PlasmicSectionMySipsActivitiesActivity__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicSectionMySipsActivitiesActivity__VariantsArgs;
export const PlasmicSectionMySipsActivitiesActivity__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionMySipsActivitiesActivity__ArgsType = {
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  imageAltText?: string;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSectionMySipsActivitiesActivity__ArgsType;
export const PlasmicSectionMySipsActivitiesActivity__ArgProps =
  new Array<ArgPropType>("image", "imageAltText", "children");

export type PlasmicSectionMySipsActivitiesActivity__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  cta?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultSectionMySipsActivitiesActivityProps {
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  imageAltText?: string;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicSectionMySipsActivitiesActivity__RenderFunc(props: {
  variants: PlasmicSectionMySipsActivitiesActivity__VariantsArgs;
  args: PlasmicSectionMySipsActivitiesActivity__ArgsType;
  overrides: PlasmicSectionMySipsActivitiesActivity__OverridesType;

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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"cta"}
          data-plasmic-override={overrides.cta}
          className={classNames(projectcss.all, sty.cta)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children
          })}
        </div>

        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={args.imageAltText}
          className={classNames(sty.img)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={args.image}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "cta", "img"],
  freeBox: ["freeBox", "cta", "img"],
  cta: ["cta"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  cta: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionMySipsActivitiesActivity__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionMySipsActivitiesActivity__VariantsArgs;
    args?: PlasmicSectionMySipsActivitiesActivity__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicSectionMySipsActivitiesActivity__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicSectionMySipsActivitiesActivity__ArgsType, ReservedPropsType> &
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
          internalArgPropNames:
            PlasmicSectionMySipsActivitiesActivity__ArgProps,
          internalVariantPropNames:
            PlasmicSectionMySipsActivitiesActivity__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSectionMySipsActivitiesActivity__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionMySipsActivitiesActivity";
  } else {
    func.displayName = `PlasmicSectionMySipsActivitiesActivity.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionMySipsActivitiesActivity = Object.assign(
  // Top-level PlasmicSectionMySipsActivitiesActivity renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    cta: makeNodeComponent("cta"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicSectionMySipsActivitiesActivity
    internalVariantProps: PlasmicSectionMySipsActivitiesActivity__VariantProps,
    internalArgProps: PlasmicSectionMySipsActivitiesActivity__ArgProps
  }
);

export default PlasmicSectionMySipsActivitiesActivity;
/* prettier-ignore-end */
