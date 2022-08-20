// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: 5XTFK8sro2yZFl
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
import SectionMobileMenuMainMenuButton from "../../SectionMobileMenuMainMenuButton"; // plasmic-import: n4laxhknGNKwOw/component
import SectionMobileMenuLink from "../../SectionMobileMenuLink"; // plasmic-import: H6eYTN0w5gwLI0/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_sips_by_design_system_css from "../sips_by_design_system/plasmic_sips_by_design_system.module.css"; // plasmic-import: mrgn3VC2r6s7VB3wKPe7xp/projectcss
import projectcss from "./plasmic_copy_of_sips_by_website.module.css"; // plasmic-import: s9FtU1QqNRpfuTCYMk46sz/projectcss
import sty from "./PlasmicZNavMobileMenuTeaStories.module.css"; // plasmic-import: 5XTFK8sro2yZFl/css

export type PlasmicZNavMobileMenuTeaStories__VariantMembers = {};

export type PlasmicZNavMobileMenuTeaStories__VariantsArgs = {};
type VariantPropType = keyof PlasmicZNavMobileMenuTeaStories__VariantsArgs;
export const PlasmicZNavMobileMenuTeaStories__VariantProps =
  new Array<VariantPropType>();

export type PlasmicZNavMobileMenuTeaStories__ArgsType = {};
type ArgPropType = keyof PlasmicZNavMobileMenuTeaStories__ArgsType;
export const PlasmicZNavMobileMenuTeaStories__ArgProps =
  new Array<ArgPropType>();

export type PlasmicZNavMobileMenuTeaStories__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  sectionMobileMenuMainMenuButton?: p.Flex<
    typeof SectionMobileMenuMainMenuButton
  >;
};

export interface DefaultZNavMobileMenuTeaStoriesProps {}

function PlasmicZNavMobileMenuTeaStories__RenderFunc(props: {
  variants: PlasmicZNavMobileMenuTeaStories__VariantsArgs;
  args: PlasmicZNavMobileMenuTeaStories__ArgsType;
  overrides: PlasmicZNavMobileMenuTeaStories__OverridesType;

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
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <SectionMobileMenuMainMenuButton
              data-plasmic-name={"sectionMobileMenuMainMenuButton"}
              data-plasmic-override={overrides.sectionMobileMenuMainMenuButton}
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuMainMenuButton
              )}
            >
              {"Main Menu"}
            </SectionMobileMenuMainMenuButton>

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink__sbheE
              )}
              description={" "}
              destination={
                "/blogs/functional-herb-spotlights/best-teas-for-stress-anxiety" as const
              }
            >
              {"8 Teas for Anxiety, Stress, and Calm"}
            </SectionMobileMenuLink>

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink__rw5Oa
              )}
              description={" "}
            >
              {"Tea Story"}
            </SectionMobileMenuLink>

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink___467Ei
              )}
              description={" "}
            >
              {"Tea Story"}
            </SectionMobileMenuLink>

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink___3D7Mw
              )}
              description={" "}
            >
              {"Tea Story"}
            </SectionMobileMenuLink>

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink__hMeco
              )}
              description={" "}
            >
              {"Tea Story"}
            </SectionMobileMenuLink>

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink___0XDdA
              )}
              description={" "}
            >
              {"Tea Story"}
            </SectionMobileMenuLink>

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink__pim5F
              )}
              description={" "}
            >
              {"Tea Story"}
            </SectionMobileMenuLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "sectionMobileMenuMainMenuButton"],
  freeBox: ["freeBox", "sectionMobileMenuMainMenuButton"],
  sectionMobileMenuMainMenuButton: ["sectionMobileMenuMainMenuButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  sectionMobileMenuMainMenuButton: typeof SectionMobileMenuMainMenuButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicZNavMobileMenuTeaStories__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicZNavMobileMenuTeaStories__VariantsArgs;
    args?: PlasmicZNavMobileMenuTeaStories__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicZNavMobileMenuTeaStories__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicZNavMobileMenuTeaStories__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicZNavMobileMenuTeaStories__ArgProps,
          internalVariantPropNames:
            PlasmicZNavMobileMenuTeaStories__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicZNavMobileMenuTeaStories__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicZNavMobileMenuTeaStories";
  } else {
    func.displayName = `PlasmicZNavMobileMenuTeaStories.${nodeName}`;
  }
  return func;
}

export const PlasmicZNavMobileMenuTeaStories = Object.assign(
  // Top-level PlasmicZNavMobileMenuTeaStories renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    sectionMobileMenuMainMenuButton: makeNodeComponent(
      "sectionMobileMenuMainMenuButton"
    ),

    // Metadata about props expected for PlasmicZNavMobileMenuTeaStories
    internalVariantProps: PlasmicZNavMobileMenuTeaStories__VariantProps,
    internalArgProps: PlasmicZNavMobileMenuTeaStories__ArgProps
  }
);

export default PlasmicZNavMobileMenuTeaStories;
/* prettier-ignore-end */