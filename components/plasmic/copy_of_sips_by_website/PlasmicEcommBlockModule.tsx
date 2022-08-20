// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: SVsSN17uZItN3m
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
import sty from "./PlasmicEcommBlockModule.module.css"; // plasmic-import: SVsSN17uZItN3m/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: MpX9BP8blGMfpD/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 4feDHP-bpH6OM4/icon

export type PlasmicEcommBlockModule__VariantMembers = {
  swapBlocksMobile: "swapBlocksMobile";
  swapBlocks: "swapBlocks";
};

export type PlasmicEcommBlockModule__VariantsArgs = {
  swapBlocksMobile?: SingleBooleanChoiceArg<"swapBlocksMobile">;
  swapBlocks?: SingleBooleanChoiceArg<"swapBlocks">;
};

type VariantPropType = keyof PlasmicEcommBlockModule__VariantsArgs;
export const PlasmicEcommBlockModule__VariantProps = new Array<VariantPropType>(
  "swapBlocksMobile",
  "swapBlocks"
);

export type PlasmicEcommBlockModule__ArgsType = {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicEcommBlockModule__ArgsType;
export const PlasmicEcommBlockModule__ArgProps = new Array<ArgPropType>(
  "slot",
  "slot2",
  "slot3",
  "children"
);

export type PlasmicEcommBlockModule__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  pageRow?: p.Flex<typeof PageRow>;
};

export interface DefaultEcommBlockModuleProps {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  children?: React.ReactNode;
  swapBlocksMobile?: SingleBooleanChoiceArg<"swapBlocksMobile">;
  swapBlocks?: SingleBooleanChoiceArg<"swapBlocks">;
  className?: string;
}

function PlasmicEcommBlockModule__RenderFunc(props: {
  variants: PlasmicEcommBlockModule__VariantsArgs;
  args: PlasmicEcommBlockModule__ArgsType;
  overrides: PlasmicEcommBlockModule__OverridesType;

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
        sty.root,
        {
          [sty.rootswapBlocksMobile]: hasVariant(
            variants,
            "swapBlocksMobile",
            "swapBlocksMobile"
          ),
          [sty.rootswapBlocks]: hasVariant(variants, "swapBlocks", "swapBlocks")
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns, {
          [sty.columnsswapBlocksMobile]: hasVariant(
            variants,
            "swapBlocksMobile",
            "swapBlocksMobile"
          ),
          [sty.columnsswapBlocks]: hasVariant(
            variants,
            "swapBlocks",
            "swapBlocks"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.column__mglMb)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicLink
                aria-hidden={"true" as const}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__bBjc8
                )}
                component={Link}
                platform={"nextjs"}
                role={"" as const}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__uLeiv)}
                  displayHeight={"100%" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/copy_of_sips_by_website/images/image4.png",
                    fullWidth: 4384,
                    fullHeight: 4384,
                    aspectRatio: undefined
                  }}
                />
              </p.PlasmicLink>
            ),

            value: args.children
          })}
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column__yPh66)}
        >
          <PageRow
            data-plasmic-name={"pageRow"}
            data-plasmic-override={overrides.pageRow}
            className={classNames("__wab_instance", sty.pageRow)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hDejU)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__qQlSi)}>
                {p.renderPlasmicSlot({
                  defaultContents: "Wellness Tea",
                  value: args.slot,
                  className: classNames(sty.slotTargetSlot)
                })}
              </div>

              {p.renderPlasmicSlot({
                defaultContents:
                  "From a mood-boost to allergy relief, find some extra relief in your cuppa!",
                value: args.slot2,
                className: classNames(sty.slotTargetSlot2)
              })}

              {p.renderPlasmicSlot({
                defaultContents: (
                  <ButtonLnUpdate
                    className={classNames(
                      "__wab_instance",
                      sty.buttonLnUpdate__rv9VG
                    )}
                    link={"" as const}
                  >
                    {"Button"}
                  </ButtonLnUpdate>
                ),

                value: args.slot3
              })}
            </p.Stack>
          </PageRow>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "pageRow"],
  columns: ["columns", "pageRow"],
  pageRow: ["pageRow"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  pageRow: typeof PageRow;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEcommBlockModule__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEcommBlockModule__VariantsArgs;
    args?: PlasmicEcommBlockModule__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEcommBlockModule__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEcommBlockModule__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicEcommBlockModule__ArgProps,
          internalVariantPropNames: PlasmicEcommBlockModule__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicEcommBlockModule__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEcommBlockModule";
  } else {
    func.displayName = `PlasmicEcommBlockModule.${nodeName}`;
  }
  return func;
}

export const PlasmicEcommBlockModule = Object.assign(
  // Top-level PlasmicEcommBlockModule renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    pageRow: makeNodeComponent("pageRow"),

    // Metadata about props expected for PlasmicEcommBlockModule
    internalVariantProps: PlasmicEcommBlockModule__VariantProps,
    internalArgProps: PlasmicEcommBlockModule__ArgProps
  }
);

export default PlasmicEcommBlockModule;
/* prettier-ignore-end */
