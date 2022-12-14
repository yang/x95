// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: G7QGgKEELhaV8N
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
import PageRow from "../../PageRow"; // plasmic-import: AKAM4dN1Fw/component
import ButtonLnUpdate from "../../ButtonLnUpdate"; // plasmic-import: W3xFx930gMYiRb/component

import { useScreenVariants as useScreenVariants_6PiZsruRybCC } from "../sips_by_design_system/PlasmicGlobalVariant__Screen"; // plasmic-import: 6piZsruRybC-C/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_sips_by_design_system_css from "../sips_by_design_system/plasmic_sips_by_design_system.module.css"; // plasmic-import: mrgn3VC2r6s7VB3wKPe7xp/projectcss
import projectcss from "./plasmic_copy_of_sips_by_website.module.css"; // plasmic-import: s9FtU1QqNRpfuTCYMk46sz/projectcss
import sty from "./PlasmicLnTeaQuizCtaScreen.module.css"; // plasmic-import: G7QGgKEELhaV8N/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: MpX9BP8blGMfpD/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 4feDHP-bpH6OM4/icon

export type PlasmicLnTeaQuizCtaScreen__VariantMembers = {};

export type PlasmicLnTeaQuizCtaScreen__VariantsArgs = {};
type VariantPropType = keyof PlasmicLnTeaQuizCtaScreen__VariantsArgs;
export const PlasmicLnTeaQuizCtaScreen__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLnTeaQuizCtaScreen__ArgsType = {};
type ArgPropType = keyof PlasmicLnTeaQuizCtaScreen__ArgsType;
export const PlasmicLnTeaQuizCtaScreen__ArgProps = new Array<ArgPropType>();

export type PlasmicLnTeaQuizCtaScreen__OverridesType = {
  root?: p.Flex<"div">;
  teaQuizScreen?: p.Flex<"section">;
  pageRow?: p.Flex<typeof PageRow>;
  freeBox?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  buttonLnUpdate?: p.Flex<typeof ButtonLnUpdate>;
};

export interface DefaultLnTeaQuizCtaScreenProps {}

function PlasmicLnTeaQuizCtaScreen__RenderFunc(props: {
  variants: PlasmicLnTeaQuizCtaScreen__VariantsArgs;
  args: PlasmicLnTeaQuizCtaScreen__ArgsType;
  overrides: PlasmicLnTeaQuizCtaScreen__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6PiZsruRybCC()
  });

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
          <section
            data-plasmic-name={"teaQuizScreen"}
            data-plasmic-override={overrides.teaQuizScreen}
            className={classNames(projectcss.all, sty.teaQuizScreen)}
          >
            <PageRow
              data-plasmic-name={"pageRow"}
              data-plasmic-override={overrides.pageRow}
              className={classNames("__wab_instance", sty.pageRow)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {hasVariant(globalVariants, "screen", "desktop")
                    ? "Take the Tea Profile Quiz now to start your personalized tea journey!"
                    : hasVariant(globalVariants, "screen", "tabletLandscape")
                    ? "Take the Tea Profile Quiz now to start your personalized tea journey!"
                    : hasVariant(globalVariants, "screen", "tabletPortrait")
                    ? "Take the Tea Profile Quiz now to start your personalized tea journey!"
                    : "Take the Tea Profile Quiz now to start your personalized tea journey!"}
                </h1>

                <ButtonLnUpdate
                  data-plasmic-name={"buttonLnUpdate"}
                  data-plasmic-override={overrides.buttonLnUpdate}
                  buttonColor={"darkPink" as const}
                  className={classNames("__wab_instance", sty.buttonLnUpdate)}
                >
                  {"Get started"}
                </ButtonLnUpdate>
              </p.Stack>
            </PageRow>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "teaQuizScreen", "pageRow", "freeBox", "h1", "buttonLnUpdate"],
  teaQuizScreen: [
    "teaQuizScreen",
    "pageRow",
    "freeBox",
    "h1",
    "buttonLnUpdate"
  ],
  pageRow: ["pageRow", "freeBox", "h1", "buttonLnUpdate"],
  freeBox: ["freeBox", "h1", "buttonLnUpdate"],
  h1: ["h1"],
  buttonLnUpdate: ["buttonLnUpdate"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  teaQuizScreen: "section";
  pageRow: typeof PageRow;
  freeBox: "div";
  h1: "h1";
  buttonLnUpdate: typeof ButtonLnUpdate;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLnTeaQuizCtaScreen__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLnTeaQuizCtaScreen__VariantsArgs;
    args?: PlasmicLnTeaQuizCtaScreen__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLnTeaQuizCtaScreen__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLnTeaQuizCtaScreen__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLnTeaQuizCtaScreen__ArgProps,
          internalVariantPropNames: PlasmicLnTeaQuizCtaScreen__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLnTeaQuizCtaScreen__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLnTeaQuizCtaScreen";
  } else {
    func.displayName = `PlasmicLnTeaQuizCtaScreen.${nodeName}`;
  }
  return func;
}

export const PlasmicLnTeaQuizCtaScreen = Object.assign(
  // Top-level PlasmicLnTeaQuizCtaScreen renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    teaQuizScreen: makeNodeComponent("teaQuizScreen"),
    pageRow: makeNodeComponent("pageRow"),
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    buttonLnUpdate: makeNodeComponent("buttonLnUpdate"),

    // Metadata about props expected for PlasmicLnTeaQuizCtaScreen
    internalVariantProps: PlasmicLnTeaQuizCtaScreen__VariantProps,
    internalArgProps: PlasmicLnTeaQuizCtaScreen__ArgProps
  }
);

export default PlasmicLnTeaQuizCtaScreen;
/* prettier-ignore-end */
