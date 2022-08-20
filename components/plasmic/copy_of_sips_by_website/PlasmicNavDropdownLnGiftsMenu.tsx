// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: ZuN8VeGevwqvJf
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
import MenuLinkDesktop from "../../MenuLinkDesktop"; // plasmic-import: UGKDap61CYE_TA/component
import DesktopMenuFeaturedBlock from "../../DesktopMenuFeaturedBlock"; // plasmic-import: 5GribXSnrnPdXi/component

import { useScreenVariants as useScreenVariants_6PiZsruRybCC } from "../sips_by_design_system/PlasmicGlobalVariant__Screen"; // plasmic-import: 6piZsruRybC-C/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_sips_by_design_system_css from "../sips_by_design_system/plasmic_sips_by_design_system.module.css"; // plasmic-import: mrgn3VC2r6s7VB3wKPe7xp/projectcss
import projectcss from "./plasmic_copy_of_sips_by_website.module.css"; // plasmic-import: s9FtU1QqNRpfuTCYMk46sz/projectcss
import sty from "./PlasmicNavDropdownLnGiftsMenu.module.css"; // plasmic-import: ZuN8VeGevwqvJf/css

export type PlasmicNavDropdownLnGiftsMenu__VariantMembers = {};

export type PlasmicNavDropdownLnGiftsMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavDropdownLnGiftsMenu__VariantsArgs;
export const PlasmicNavDropdownLnGiftsMenu__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNavDropdownLnGiftsMenu__ArgsType = {
  link?: string;
};

type ArgPropType = keyof PlasmicNavDropdownLnGiftsMenu__ArgsType;
export const PlasmicNavDropdownLnGiftsMenu__ArgProps = new Array<ArgPropType>(
  "link"
);

export type PlasmicNavDropdownLnGiftsMenu__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  menuColumn8?: p.Flex<"div">;
  menuColumn9?: p.Flex<"div">;
  productColumn3?: p.Flex<"div">;
  giftSubCtaBlock?: p.Flex<"a"> & Partial<LinkProps>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultNavDropdownLnGiftsMenuProps {}

function PlasmicNavDropdownLnGiftsMenu__RenderFunc(props: {
  variants: PlasmicNavDropdownLnGiftsMenu__VariantsArgs;
  args: PlasmicNavDropdownLnGiftsMenu__ArgsType;
  overrides: PlasmicNavDropdownLnGiftsMenu__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          link: "/" as const
        },
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
        {true ? (
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
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__hnTdJ)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__mtb3J)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"menuColumn8"}
                      data-plasmic-override={overrides.menuColumn8}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.menuColumn8)}
                    >
                      <p
                        className={classNames(
                          projectcss.all,
                          projectcss.p,
                          projectcss.__wab_text,
                          sty.p___9ZvoD
                        )}
                      >
                        {"Explore"}
                      </p>

                      {true ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__n7SXc
                          )}
                        >
                          <MenuLinkDesktop
                            className={classNames(
                              "__wab_instance",
                              sty.menuLinkDesktop___0Nfd
                            )}
                            link={
                              "/products/gift-the-joy-of-tea-discovery" as const
                            }
                          >
                            {"Gift a Subscription"}
                          </MenuLinkDesktop>

                          <MenuLinkDesktop
                            className={classNames(
                              "__wab_instance",
                              sty.menuLinkDesktop__nIizj
                            )}
                            link={"/collections/best-selling-gifts/" as const}
                          >
                            {"Best-Selling Gifts"}
                          </MenuLinkDesktop>

                          <MenuLinkDesktop
                            className={classNames(
                              "__wab_instance",
                              sty.menuLinkDesktop__khw6
                            )}
                            link={
                              "/products/the-mini-box-gift-a-cup-of-tea/" as const
                            }
                          >
                            {"The Mini Box"}
                          </MenuLinkDesktop>

                          <MenuLinkDesktop
                            className={classNames(
                              "__wab_instance",
                              sty.menuLinkDesktop__rWte4
                            )}
                            link={"/collections/tea-gifts" as const}
                          >
                            {"Shop All"}
                          </MenuLinkDesktop>
                        </p.Stack>
                      ) : null}
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"menuColumn9"}
                      data-plasmic-override={overrides.menuColumn9}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.menuColumn9)}
                    >
                      <p
                        className={classNames(
                          projectcss.all,
                          projectcss.p,
                          projectcss.__wab_text,
                          sty.p__jkuzb
                        )}
                      >
                        {"Occasion"}
                      </p>

                      {true ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__fIfo5
                          )}
                        >
                          <MenuLinkDesktop
                            className={classNames(
                              "__wab_instance",
                              sty.menuLinkDesktop__pdwK
                            )}
                            link={"/collections/birthday-tea-shop/" as const}
                          >
                            {"Birthday Tea"}
                          </MenuLinkDesktop>

                          <MenuLinkDesktop
                            className={classNames(
                              "__wab_instance",
                              sty.menuLinkDesktop__iwGdU
                            )}
                            link={"/collections/bridal-tea-shop/" as const}
                          >
                            {"Bridal Tea"}
                          </MenuLinkDesktop>

                          <MenuLinkDesktop
                            className={classNames(
                              "__wab_instance",
                              sty.menuLinkDesktop__g7SI
                            )}
                            link={
                              "/products/appreciation-tea-care-pack" as const
                            }
                          >
                            {"Thank You Tea"}
                          </MenuLinkDesktop>

                          <MenuLinkDesktop
                            className={classNames(
                              "__wab_instance",
                              sty.menuLinkDesktop__qoRUt
                            )}
                            link={"/collections/feel-better-tea-shop" as const}
                          >
                            {"Feel Better Tea"}
                          </MenuLinkDesktop>

                          <MenuLinkDesktop
                            className={classNames(
                              "__wab_instance",
                              sty.menuLinkDesktop___75K3Z
                            )}
                            link={"/products/i-love-you-more-tea-kit" as const}
                          >
                            {"Love Tea"}
                          </MenuLinkDesktop>
                        </p.Stack>
                      ) : null}
                    </p.Stack>
                  </div>
                ) : null}
              </div>

              <div className={classNames(projectcss.all, sty.column__kj8X2)}>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"productColumn3"}
                  data-plasmic-override={overrides.productColumn3}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.productColumn3)}
                >
                  <p
                    className={classNames(
                      projectcss.all,
                      projectcss.p,
                      projectcss.__wab_text,
                      sty.p__ecoVo
                    )}
                  >
                    {"Featured Gifts"}
                  </p>

                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__lsyN5)}
                    >
                      <DesktopMenuFeaturedBlock
                        className={classNames(
                          "__wab_instance",
                          sty.desktopMenuFeaturedBlock__eN6Ag
                        )}
                        link={
                          "/products/gift-the-joy-of-tea-discovery" as const
                        }
                        slot={"Digital Gift Card"}
                      />

                      <DesktopMenuFeaturedBlock
                        className={classNames(
                          "__wab_instance",
                          sty.desktopMenuFeaturedBlock__zrSxy
                        )}
                        link={
                          "/products/sips-by-box-subscription-physical-gift-card" as const
                        }
                        slot={"Physical Gift Card"}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__nnzfH)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"auto" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/copy_of_sips_by_website/images/lavendergiftcardjpg.jpeg",
                            fullWidth: 850,
                            fullHeight: 850,
                            aspectRatio: undefined
                          }}
                        />
                      </DesktopMenuFeaturedBlock>
                    </p.Stack>
                  ) : null}
                </p.Stack>
              </div>

              <div className={classNames(projectcss.all, sty.column__jG2Fu)}>
                {(
                  hasVariant(globalVariants, "screen", "desktop") ? true : true
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__hhA4)}
                  >
                    <p.Stack
                      as={p.PlasmicLink}
                      data-plasmic-name={"giftSubCtaBlock"}
                      data-plasmic-override={overrides.giftSubCtaBlock}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.giftSubCtaBlock
                      )}
                      component={Link}
                      href={
                        hasVariant(globalVariants, "screen", "tabletLandscape")
                          ? ("https://m.sipsby.com/p/gift" as const)
                          : ("https://m.sipsby.com/p/gift" as const)
                      }
                      platform={"nextjs"}
                    >
                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__alaqn
                          )}
                        >
                          {(
                            hasVariant(globalVariants, "screen", "desktop")
                              ? true
                              : true
                          ) ? (
                            <p.PlasmicImg
                              alt={
                                "Cartoon mug of tea decorated with a heart" as const
                              }
                              className={classNames(sty.img__iuwKz)}
                              displayHeight={"100px" as const}
                              displayMaxHeight={"none" as const}
                              displayMaxWidth={"100%" as const}
                              displayMinHeight={"0" as const}
                              displayMinWidth={"0" as const}
                              displayWidth={"100px" as const}
                              loading={"lazy" as const}
                              src={{
                                src: "/plasmic/copy_of_sips_by_website/images/teaheartmugBlackgif.gif",
                                fullWidth: 568,
                                fullHeight: 2100,
                                aspectRatio: undefined
                              }}
                            />
                          ) : null}

                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__tsPvv
                            )}
                          >
                            {true ? (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__hEuTj
                                )}
                              >
                                {true ? (
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox__sikL
                                    )}
                                  >
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__wMP2
                                      )}
                                    >
                                      {"Gift the #1 Rated Tea Club  →"}
                                    </div>

                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__aC6D8
                                      )}
                                    >
                                      {
                                        "Four personalized teas they'll love to sip."
                                      }
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ) : null}
                          </p.Stack>
                        </div>
                      ) : null}
                    </p.Stack>

                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__xEj2Y
                        )}
                      >
                        <p.PlasmicLink
                          data-plasmic-name={"link"}
                          data-plasmic-override={overrides.link}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            sty.link
                          )}
                          component={Link}
                          href={"/pages/mygift" as const}
                          platform={"nextjs"}
                        >
                          {"Have a gift card? Redeem now!"}
                        </p.PlasmicLink>
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
              </div>
            </p.Stack>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "columns",
    "menuColumn8",
    "menuColumn9",
    "productColumn3",
    "giftSubCtaBlock",
    "link"
  ],
  columns: [
    "columns",
    "menuColumn8",
    "menuColumn9",
    "productColumn3",
    "giftSubCtaBlock",
    "link"
  ],
  menuColumn8: ["menuColumn8"],
  menuColumn9: ["menuColumn9"],
  productColumn3: ["productColumn3"],
  giftSubCtaBlock: ["giftSubCtaBlock"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  menuColumn8: "div";
  menuColumn9: "div";
  productColumn3: "div";
  giftSubCtaBlock: "a";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavDropdownLnGiftsMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavDropdownLnGiftsMenu__VariantsArgs;
    args?: PlasmicNavDropdownLnGiftsMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavDropdownLnGiftsMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavDropdownLnGiftsMenu__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicNavDropdownLnGiftsMenu__ArgProps,
          internalVariantPropNames: PlasmicNavDropdownLnGiftsMenu__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavDropdownLnGiftsMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavDropdownLnGiftsMenu";
  } else {
    func.displayName = `PlasmicNavDropdownLnGiftsMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicNavDropdownLnGiftsMenu = Object.assign(
  // Top-level PlasmicNavDropdownLnGiftsMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    menuColumn8: makeNodeComponent("menuColumn8"),
    menuColumn9: makeNodeComponent("menuColumn9"),
    productColumn3: makeNodeComponent("productColumn3"),
    giftSubCtaBlock: makeNodeComponent("giftSubCtaBlock"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicNavDropdownLnGiftsMenu
    internalVariantProps: PlasmicNavDropdownLnGiftsMenu__VariantProps,
    internalArgProps: PlasmicNavDropdownLnGiftsMenu__ArgProps
  }
);

export default PlasmicNavDropdownLnGiftsMenu;
/* prettier-ignore-end */
