// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: H6eYTN0w5gwLI0
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
import sty from "./PlasmicSectionMobileMenuLink.module.css"; // plasmic-import: H6eYTN0w5gwLI0/css

export type PlasmicSectionMobileMenuLink__VariantMembers = {};

export type PlasmicSectionMobileMenuLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionMobileMenuLink__VariantsArgs;
export const PlasmicSectionMobileMenuLink__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionMobileMenuLink__ArgsType = {
  children?: React.ReactNode;
  description?: React.ReactNode;
  destination?: string;
};

type ArgPropType = keyof PlasmicSectionMobileMenuLink__ArgsType;
export const PlasmicSectionMobileMenuLink__ArgProps = new Array<ArgPropType>(
  "children",
  "description",
  "destination"
);

export type PlasmicSectionMobileMenuLink__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultSectionMobileMenuLinkProps {
  children?: React.ReactNode;
  description?: React.ReactNode;
  destination?: string;
  className?: string;
}

function PlasmicSectionMobileMenuLink__RenderFunc(props: {
  variants: PlasmicSectionMobileMenuLink__VariantsArgs;
  args: PlasmicSectionMobileMenuLink__ArgsType;
  overrides: PlasmicSectionMobileMenuLink__OverridesType;

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
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
        defaultContents: "Link Title",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Optional additional text",
          value: args.description,
          className: classNames(sty.slotTargetDescription)
        })}
      </div>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionMobileMenuLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionMobileMenuLink__VariantsArgs;
    args?: PlasmicSectionMobileMenuLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionMobileMenuLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionMobileMenuLink__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSectionMobileMenuLink__ArgProps,
          internalVariantPropNames: PlasmicSectionMobileMenuLink__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSectionMobileMenuLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionMobileMenuLink";
  } else {
    func.displayName = `PlasmicSectionMobileMenuLink.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionMobileMenuLink = Object.assign(
  // Top-level PlasmicSectionMobileMenuLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSectionMobileMenuLink
    internalVariantProps: PlasmicSectionMobileMenuLink__VariantProps,
    internalArgProps: PlasmicSectionMobileMenuLink__ArgProps
  }
);

export default PlasmicSectionMobileMenuLink;
/* prettier-ignore-end */
