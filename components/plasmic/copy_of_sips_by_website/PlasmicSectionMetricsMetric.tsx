// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: sW6svfkibZkesa
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
import sty from "./PlasmicSectionMetricsMetric.module.css"; // plasmic-import: sW6svfkibZkesa/css

export type PlasmicSectionMetricsMetric__VariantMembers = {};

export type PlasmicSectionMetricsMetric__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionMetricsMetric__VariantsArgs;
export const PlasmicSectionMetricsMetric__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionMetricsMetric__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSectionMetricsMetric__ArgsType;
export const PlasmicSectionMetricsMetric__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicSectionMetricsMetric__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSectionMetricsMetricProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicSectionMetricsMetric__RenderFunc(props: {
  variants: PlasmicSectionMetricsMetric__VariantsArgs;
  args: PlasmicSectionMetricsMetric__ArgsType;
  overrides: PlasmicSectionMetricsMetric__OverridesType;

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
      <div className={classNames(projectcss.all, sty.freeBox__fbVyp)}>
        {p.renderPlasmicSlot({
          defaultContents: "123$",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__m7Id)}>
        {p.renderPlasmicSlot({
          defaultContents: "Metric Name",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionMetricsMetric__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionMetricsMetric__VariantsArgs;
    args?: PlasmicSectionMetricsMetric__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionMetricsMetric__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionMetricsMetric__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSectionMetricsMetric__ArgProps,
          internalVariantPropNames: PlasmicSectionMetricsMetric__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSectionMetricsMetric__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionMetricsMetric";
  } else {
    func.displayName = `PlasmicSectionMetricsMetric.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionMetricsMetric = Object.assign(
  // Top-level PlasmicSectionMetricsMetric renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSectionMetricsMetric
    internalVariantProps: PlasmicSectionMetricsMetric__VariantProps,
    internalArgProps: PlasmicSectionMetricsMetric__ArgProps
  }
);

export default PlasmicSectionMetricsMetric;
/* prettier-ignore-end */
