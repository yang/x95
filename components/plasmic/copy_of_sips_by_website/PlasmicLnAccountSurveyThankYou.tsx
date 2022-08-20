// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: bL_TLaBe9bJYYi
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
import sty from "./PlasmicLnAccountSurveyThankYou.module.css"; // plasmic-import: bL_TLaBe9bJYYi/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: MpX9BP8blGMfpD/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 4feDHP-bpH6OM4/icon

export type PlasmicLnAccountSurveyThankYou__VariantMembers = {};

export type PlasmicLnAccountSurveyThankYou__VariantsArgs = {};
type VariantPropType = keyof PlasmicLnAccountSurveyThankYou__VariantsArgs;
export const PlasmicLnAccountSurveyThankYou__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLnAccountSurveyThankYou__ArgsType = {};
type ArgPropType = keyof PlasmicLnAccountSurveyThankYou__ArgsType;
export const PlasmicLnAccountSurveyThankYou__ArgProps =
  new Array<ArgPropType>();

export type PlasmicLnAccountSurveyThankYou__OverridesType = {
  root?: p.Flex<"div">;
  activationScreen?: p.Flex<"section">;
  pageRow?: p.Flex<typeof PageRow>;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  thankYouForTakingTheQuiz?: p.Flex<"h1">;
  yourQuizResultWillBeUsedToPersonalizeYourTeaExperience?: p.Flex<"div">;
  buttonLnUpdate?: p.Flex<typeof ButtonLnUpdate>;
  goToMySips?: p.Flex<"div">;
};

export interface DefaultLnAccountSurveyThankYouProps {}

function PlasmicLnAccountSurveyThankYou__RenderFunc(props: {
  variants: PlasmicLnAccountSurveyThankYou__VariantsArgs;
  args: PlasmicLnAccountSurveyThankYou__ArgsType;
  overrides: PlasmicLnAccountSurveyThankYou__OverridesType;

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
      <Head>
        <meta name="twitter:card" content="summary" />

        <title key="title">{"Thank You For Taking The Survey"}</title>

        <meta
          key="og:title"
          property="og:title"
          content={"Thank You For Taking The Survey"}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={"Thank You For Taking The Survey"}
        />
      </Head>

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
            data-plasmic-name={"activationScreen"}
            data-plasmic-override={overrides.activationScreen}
            className={classNames(projectcss.all, sty.activationScreen)}
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
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "desktop")
                      ? ("130px" as const)
                      : hasVariant(globalVariants, "screen", "tabletLandscape")
                      ? ("100px" as const)
                      : ("100px" as const)
                  }
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={
                    hasVariant(globalVariants, "screen", "desktop")
                      ? ("100%" as const)
                      : hasVariant(globalVariants, "screen", "tabletLandscape")
                      ? ("100%" as const)
                      : ("100%" as const)
                  }
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={
                    hasVariant(globalVariants, "screen", "desktop")
                      ? ("100%" as const)
                      : hasVariant(globalVariants, "screen", "tabletLandscape")
                      ? ("100%" as const)
                      : ("100%" as const)
                  }
                  loading={
                    hasVariant(globalVariants, "screen", "desktop")
                      ? ("lazy" as const)
                      : hasVariant(globalVariants, "screen", "tabletLandscape")
                      ? ("lazy" as const)
                      : ("lazy" as const)
                  }
                  src={
                    hasVariant(globalVariants, "screen", "desktop")
                      ? {
                          src: "/plasmic/copy_of_sips_by_website/images/teaheartmugBlackgif.gif",
                          fullWidth: 568,
                          fullHeight: 2100,
                          aspectRatio: undefined
                        }
                      : hasVariant(globalVariants, "screen", "tabletLandscape")
                      ? {
                          src: "/plasmic/copy_of_sips_by_website/images/teaheartmugBlackgif.gif",
                          fullWidth: 568,
                          fullHeight: 2100,
                          aspectRatio: undefined
                        }
                      : {
                          src: "/plasmic/copy_of_sips_by_website/images/teaheartmugBlackgif.gif",
                          fullWidth: 568,
                          fullHeight: 2100,
                          aspectRatio: undefined
                        }
                  }
                />

                <h1
                  data-plasmic-name={"thankYouForTakingTheQuiz"}
                  data-plasmic-override={overrides.thankYouForTakingTheQuiz}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.thankYouForTakingTheQuiz
                  )}
                >
                  {"Thank you for taking the quiz!"}
                </h1>

                <div
                  data-plasmic-name={
                    "yourQuizResultWillBeUsedToPersonalizeYourTeaExperience"
                  }
                  data-plasmic-override={
                    overrides.yourQuizResultWillBeUsedToPersonalizeYourTeaExperience
                  }
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.yourQuizResultWillBeUsedToPersonalizeYourTeaExperience
                  )}
                >
                  {
                    "Your quiz result will be used to personalize your tea experience"
                  }
                </div>

                <ButtonLnUpdate
                  data-plasmic-name={"buttonLnUpdate"}
                  data-plasmic-override={overrides.buttonLnUpdate}
                  buttonColor={"darkPink" as const}
                  className={classNames("__wab_instance", sty.buttonLnUpdate)}
                  link={"/account" as const}
                >
                  <div
                    data-plasmic-name={"goToMySips"}
                    data-plasmic-override={overrides.goToMySips}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.goToMySips
                    )}
                  >
                    {"Go to My Sips"}
                  </div>
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
  root: [
    "root",
    "activationScreen",
    "pageRow",
    "freeBox",
    "img",
    "thankYouForTakingTheQuiz",
    "yourQuizResultWillBeUsedToPersonalizeYourTeaExperience",
    "buttonLnUpdate",
    "goToMySips"
  ],
  activationScreen: [
    "activationScreen",
    "pageRow",
    "freeBox",
    "img",
    "thankYouForTakingTheQuiz",
    "yourQuizResultWillBeUsedToPersonalizeYourTeaExperience",
    "buttonLnUpdate",
    "goToMySips"
  ],
  pageRow: [
    "pageRow",
    "freeBox",
    "img",
    "thankYouForTakingTheQuiz",
    "yourQuizResultWillBeUsedToPersonalizeYourTeaExperience",
    "buttonLnUpdate",
    "goToMySips"
  ],
  freeBox: [
    "freeBox",
    "img",
    "thankYouForTakingTheQuiz",
    "yourQuizResultWillBeUsedToPersonalizeYourTeaExperience",
    "buttonLnUpdate",
    "goToMySips"
  ],
  img: ["img"],
  thankYouForTakingTheQuiz: ["thankYouForTakingTheQuiz"],
  yourQuizResultWillBeUsedToPersonalizeYourTeaExperience: [
    "yourQuizResultWillBeUsedToPersonalizeYourTeaExperience"
  ],
  buttonLnUpdate: ["buttonLnUpdate", "goToMySips"],
  goToMySips: ["goToMySips"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  activationScreen: "section";
  pageRow: typeof PageRow;
  freeBox: "div";
  img: typeof p.PlasmicImg;
  thankYouForTakingTheQuiz: "h1";
  yourQuizResultWillBeUsedToPersonalizeYourTeaExperience: "div";
  buttonLnUpdate: typeof ButtonLnUpdate;
  goToMySips: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLnAccountSurveyThankYou__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLnAccountSurveyThankYou__VariantsArgs;
    args?: PlasmicLnAccountSurveyThankYou__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLnAccountSurveyThankYou__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLnAccountSurveyThankYou__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLnAccountSurveyThankYou__ArgProps,
          internalVariantPropNames: PlasmicLnAccountSurveyThankYou__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLnAccountSurveyThankYou__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLnAccountSurveyThankYou";
  } else {
    func.displayName = `PlasmicLnAccountSurveyThankYou.${nodeName}`;
  }
  return func;
}

export const PlasmicLnAccountSurveyThankYou = Object.assign(
  // Top-level PlasmicLnAccountSurveyThankYou renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    activationScreen: makeNodeComponent("activationScreen"),
    pageRow: makeNodeComponent("pageRow"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    thankYouForTakingTheQuiz: makeNodeComponent("thankYouForTakingTheQuiz"),
    yourQuizResultWillBeUsedToPersonalizeYourTeaExperience: makeNodeComponent(
      "yourQuizResultWillBeUsedToPersonalizeYourTeaExperience"
    ),
    buttonLnUpdate: makeNodeComponent("buttonLnUpdate"),
    goToMySips: makeNodeComponent("goToMySips"),

    // Metadata about props expected for PlasmicLnAccountSurveyThankYou
    internalVariantProps: PlasmicLnAccountSurveyThankYou__VariantProps,
    internalArgProps: PlasmicLnAccountSurveyThankYou__ArgProps
  }
);

export default PlasmicLnAccountSurveyThankYou;
/* prettier-ignore-end */