// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: Sh5VL6QFW0T6kj
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
import SectionMobileMenuLink from "../../SectionMobileMenuLink"; // plasmic-import: H6eYTN0w5gwLI0/component
import SectionMobileMenuSubmenuLink from "../../SectionMobileMenuSubmenuLink"; // plasmic-import: J_WPXwaGlAAlQs/component

import { useScreenVariants as useScreenVariants_6PiZsruRybCC } from "../sips_by_design_system/PlasmicGlobalVariant__Screen"; // plasmic-import: 6piZsruRybC-C/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_sips_by_design_system_css from "../sips_by_design_system/plasmic_sips_by_design_system.module.css"; // plasmic-import: mrgn3VC2r6s7VB3wKPe7xp/projectcss
import projectcss from "./plasmic_copy_of_sips_by_website.module.css"; // plasmic-import: s9FtU1QqNRpfuTCYMk46sz/projectcss
import sty from "./PlasmicNavMobileMenuLnLoggedInActiveSub.module.css"; // plasmic-import: Sh5VL6QFW0T6kj/css

export type PlasmicNavMobileMenuLnLoggedInActiveSub__VariantMembers = {};

export type PlasmicNavMobileMenuLnLoggedInActiveSub__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicNavMobileMenuLnLoggedInActiveSub__VariantsArgs;
export const PlasmicNavMobileMenuLnLoggedInActiveSub__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNavMobileMenuLnLoggedInActiveSub__ArgsType = {};
type ArgPropType = keyof PlasmicNavMobileMenuLnLoggedInActiveSub__ArgsType;
export const PlasmicNavMobileMenuLnLoggedInActiveSub__ArgProps =
  new Array<ArgPropType>();

export type PlasmicNavMobileMenuLnLoggedInActiveSub__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  columns?: p.Flex<"div">;
  pagespoints?: p.Flex<"a"> & Partial<LinkProps>;
  pagessettings?: p.Flex<"a"> & Partial<LinkProps>;
  accountlogout?: p.Flex<"a"> & Partial<LinkProps>;
  httpssipsbyzendeskcomhcenUs?: p.Flex<"a"> & Partial<LinkProps>;
  pagescontact?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultNavMobileMenuLnLoggedInActiveSubProps {}

function PlasmicNavMobileMenuLnLoggedInActiveSub__RenderFunc(props: {
  variants: PlasmicNavMobileMenuLnLoggedInActiveSub__VariantsArgs;
  args: PlasmicNavMobileMenuLnLoggedInActiveSub__ArgsType;
  overrides: PlasmicNavMobileMenuLnLoggedInActiveSub__OverridesType;

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
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__aQbtV)}>
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/copy_of_sips_by_website/images/image13.png",
                  fullWidth: 590,
                  fullHeight: 246,
                  aspectRatio: undefined
                }}
              />
            </div>
          ) : null}

          <div className={classNames(projectcss.all, sty.freeBox__iqUl7)}>
            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  sty.freeBox__gqKz7,
                  "sb-logged-out-only" as const
                )}
              >
                <SectionMobileMenuLink
                  className={classNames(
                    "__wab_instance",
                    sty.sectionMobileMenuLink__qurtx
                  )}
                  description={" "}
                  destination={"/account/register" as const}
                >
                  {"Join Now"}
                </SectionMobileMenuLink>
              </div>
            ) : null}

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink__gWhe4
              )}
              description={" "}
              destination={"/account" as const}
            >
              {"My Sips"}
            </SectionMobileMenuLink>

            {true ? (
              <SectionMobileMenuSubmenuLink
                className={classNames(
                  "__wab_instance",
                  sty.sectionMobileMenuSubmenuLink__nICm
                )}
                destination={"/collections/tea" as const}
                submenuLinkSubmenuHandle={"submenu-link-sb-shop-tea" as const}
              >
                {"Tea Shop"}
              </SectionMobileMenuSubmenuLink>
            ) : null}

            {true ? (
              <SectionMobileMenuSubmenuLink
                className={classNames(
                  "__wab_instance",
                  sty.sectionMobileMenuSubmenuLink__bCu4A
                )}
                destination={"/collections/tea-accessories-all" as const}
                submenuLinkSubmenuHandle={
                  "submenu-link-sb-shop-teaware" as const
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jnkmC
                  )}
                >
                  {"Teaware"}
                </div>
              </SectionMobileMenuSubmenuLink>
            ) : null}

            <SectionMobileMenuSubmenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuSubmenuLink__cdsCj
              )}
              destination={"/collections/tea-gifts" as const}
              submenuLinkSubmenuHandle={"submenu-link-sb-shop-gifts" as const}
            >
              {"Tea Gifts"}
            </SectionMobileMenuSubmenuLink>

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink__hr8Tv
              )}
              description={" "}
              destination={"/collections/iced-tea-favorites/" as const}
            >
              {"Iced Tea"}
            </SectionMobileMenuLink>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__lZh7C)}>
                <div className={classNames(projectcss.all, sty.freeBox__gZfKf)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dnkA2
                    )}
                  >
                    {"We're the #1 Rated Tea Club"}
                  </div>
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__nofv9)}
                >
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link___46XB
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___9Jw0X
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__smCz
                        )}
                      >
                        {"Join Now"}
                      </div>
                    </div>
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__brLpn
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__p2Ygo)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__btyC
                        )}
                      >
                        {"Give a Gift"}
                      </div>
                    </div>
                  </p.PlasmicLink>
                </p.Stack>
              </div>
            ) : null}

            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  sty.freeBox__l3GqU,
                  "sb-logged-out-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink__z5Vp2
                    )}
                    description={" "}
                    destination={"https://m.sipsby.com/p/gift" as const}
                  >
                    {"Give a Gift"}
                  </SectionMobileMenuLink>
                ) : null}
              </div>
            ) : null}

            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  sty.freeBox___9G8Lt,
                  "sb-logged-out-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink___5Xe0
                    )}
                    description={" "}
                    destination={"/account/login" as const}
                  >
                    {"Log In"}
                  </SectionMobileMenuLink>
                ) : null}
              </div>
            ) : null}

            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  sty.freeBox__jP9Xj,
                  "sb-logged-in-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink__dfaQi
                    )}
                    description={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qc3Qv
                        )}
                      >
                        {" "}
                      </div>
                    }
                    destination={"/account" as const}
                  >
                    {"My Sips"}
                  </SectionMobileMenuLink>
                ) : null}
              </div>
            ) : null}

            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  sty.freeBox__efVnf,
                  "sb-logged-in-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink__p7D8K
                    )}
                    description={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wJn76
                        )}
                      >
                        {" "}
                      </div>
                    }
                    destination={"/pages/points" as const}
                  >
                    {"Points"}
                  </SectionMobileMenuLink>
                ) : null}
              </div>
            ) : null}

            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  sty.freeBox__qi5Pz,
                  "sb-logged-in-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink__e3PCp
                    )}
                    description={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__alMtn
                        )}
                      >
                        {" "}
                      </div>
                    }
                    destination={"/pages/settings" as const}
                  >
                    {"Settings"}
                  </SectionMobileMenuLink>
                ) : null}
              </div>
            ) : null}
          </div>

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column___13HJn)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___6OLuT)}>
                <p.PlasmicLink
                  data-plasmic-name={"pagespoints"}
                  data-plasmic-override={overrides.pagespoints}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.pagespoints
                  )}
                  component={Link}
                  href={"/pages/points" as const}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ozuBy
                    )}
                  >
                    {"POINTS"}
                  </div>
                </p.PlasmicLink>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__rJoEi)}>
                <p.PlasmicLink
                  data-plasmic-name={"pagessettings"}
                  data-plasmic-override={overrides.pagessettings}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.pagessettings
                  )}
                  component={Link}
                  href={"/pages/settings" as const}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___41I1Q
                    )}
                  >
                    {"SETTINGS"}
                  </div>
                </p.PlasmicLink>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__qx0O0)}>
                <p.PlasmicLink
                  data-plasmic-name={"accountlogout"}
                  data-plasmic-override={overrides.accountlogout}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.accountlogout
                  )}
                  component={Link}
                  href={"/account/logout" as const}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___04Cdl
                    )}
                  >
                    {"LOG OUT"}
                  </div>
                </p.PlasmicLink>
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__fP9MK)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__nw00A)}>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__vrbtO
                  )}
                  component={Link}
                  href={"/pages/mygift" as const}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fsDcY
                    )}
                  >
                    {"REDEEM A GIFT CARD"}
                  </div>
                </p.PlasmicLink>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__omL72)}>
                <p.PlasmicLink
                  data-plasmic-name={"httpssipsbyzendeskcomhcenUs"}
                  data-plasmic-override={overrides.httpssipsbyzendeskcomhcenUs}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.httpssipsbyzendeskcomhcenUs
                  )}
                  component={Link}
                  href={"https://sipsby.zendesk.com/hc/en-us" as const}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kIcJm
                    )}
                  >
                    {"FAQ"}
                  </div>
                </p.PlasmicLink>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__dYbtX)}>
                <p.PlasmicLink
                  data-plasmic-name={"pagescontact"}
                  data-plasmic-override={overrides.pagescontact}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.pagescontact
                  )}
                  component={Link}
                  href={"/pages/contact" as const}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___32PLr
                    )}
                  >
                    {"CONTACT US"}
                  </div>
                </p.PlasmicLink>
              </div>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "img",
    "columns",
    "pagespoints",
    "pagessettings",
    "accountlogout",
    "httpssipsbyzendeskcomhcenUs",
    "pagescontact"
  ],
  img: ["img"],
  columns: [
    "columns",
    "pagespoints",
    "pagessettings",
    "accountlogout",
    "httpssipsbyzendeskcomhcenUs",
    "pagescontact"
  ],
  pagespoints: ["pagespoints"],
  pagessettings: ["pagessettings"],
  accountlogout: ["accountlogout"],
  httpssipsbyzendeskcomhcenUs: ["httpssipsbyzendeskcomhcenUs"],
  pagescontact: ["pagescontact"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  columns: "div";
  pagespoints: "a";
  pagessettings: "a";
  accountlogout: "a";
  httpssipsbyzendeskcomhcenUs: "a";
  pagescontact: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavMobileMenuLnLoggedInActiveSub__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavMobileMenuLnLoggedInActiveSub__VariantsArgs;
    args?: PlasmicNavMobileMenuLnLoggedInActiveSub__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicNavMobileMenuLnLoggedInActiveSub__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicNavMobileMenuLnLoggedInActiveSub__ArgsType, ReservedPropsType> &
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
            PlasmicNavMobileMenuLnLoggedInActiveSub__ArgProps,
          internalVariantPropNames:
            PlasmicNavMobileMenuLnLoggedInActiveSub__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavMobileMenuLnLoggedInActiveSub__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavMobileMenuLnLoggedInActiveSub";
  } else {
    func.displayName = `PlasmicNavMobileMenuLnLoggedInActiveSub.${nodeName}`;
  }
  return func;
}

export const PlasmicNavMobileMenuLnLoggedInActiveSub = Object.assign(
  // Top-level PlasmicNavMobileMenuLnLoggedInActiveSub renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    columns: makeNodeComponent("columns"),
    pagespoints: makeNodeComponent("pagespoints"),
    pagessettings: makeNodeComponent("pagessettings"),
    accountlogout: makeNodeComponent("accountlogout"),
    httpssipsbyzendeskcomhcenUs: makeNodeComponent(
      "httpssipsbyzendeskcomhcenUs"
    ),
    pagescontact: makeNodeComponent("pagescontact"),

    // Metadata about props expected for PlasmicNavMobileMenuLnLoggedInActiveSub
    internalVariantProps: PlasmicNavMobileMenuLnLoggedInActiveSub__VariantProps,
    internalArgProps: PlasmicNavMobileMenuLnLoggedInActiveSub__ArgProps
  }
);

export default PlasmicNavMobileMenuLnLoggedInActiveSub;
/* prettier-ignore-end */
