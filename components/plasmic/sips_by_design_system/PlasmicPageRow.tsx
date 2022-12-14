// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mrgn3VC2r6s7VB3wKPe7xp
// Component: AKAM4dN1Fw
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

import projectcss from "./plasmic_sips_by_design_system.module.css"; // plasmic-import: mrgn3VC2r6s7VB3wKPe7xp/projectcss
import sty from "./PlasmicPageRow.module.css"; // plasmic-import: AKAM4dN1Fw/css

export type PlasmicPageRow__VariantMembers = {
  width: "full" | "reduced" | "narrow";
};

export type PlasmicPageRow__VariantsArgs = {
  width?: SingleChoiceArg<"full" | "reduced" | "narrow">;
};

type VariantPropType = keyof PlasmicPageRow__VariantsArgs;
export const PlasmicPageRow__VariantProps = new Array<VariantPropType>("width");

export type PlasmicPageRow__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPageRow__ArgsType;
export const PlasmicPageRow__ArgProps = new Array<ArgPropType>("children");

export type PlasmicPageRow__OverridesType = {
  root?: p.Flex<"section">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultPageRowProps {
  children?: React.ReactNode;
  width?: SingleChoiceArg<"full" | "reduced" | "narrow">;
  className?: string;
}

function PlasmicPageRow__RenderFunc(props: {
  variants: PlasmicPageRow__VariantsArgs;
  args: PlasmicPageRow__ArgsType;
  overrides: PlasmicPageRow__OverridesType;

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
    <section
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
        sty.root
      )}
    >
      {true ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxwidth_full]: hasVariant(variants, "width", "full"),
            [sty.freeBoxwidth_narrow]: hasVariant(variants, "width", "narrow"),
            [sty.freeBoxwidth_reduced]: hasVariant(variants, "width", "reduced")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>
      ) : null}
    </section>
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
  root: "section";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageRow__VariantsArgs;
    args?: PlasmicPageRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPageRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPageRow__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPageRow__ArgProps,
          internalVariantPropNames: PlasmicPageRow__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPageRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageRow";
  } else {
    func.displayName = `PlasmicPageRow.${nodeName}`;
  }
  return func;
}

export const PlasmicPageRow = Object.assign(
  // Top-level PlasmicPageRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicPageRow
    internalVariantProps: PlasmicPageRow__VariantProps,
    internalArgProps: PlasmicPageRow__ArgProps
  }
);

export default PlasmicPageRow;
/* prettier-ignore-end */
