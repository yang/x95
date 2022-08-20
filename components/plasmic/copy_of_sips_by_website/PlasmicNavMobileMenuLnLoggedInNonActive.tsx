// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: s9FtU1QqNRpfuTCYMk46sz
// Component: ew5ZRTnBxp4gUa
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
import sty from "./PlasmicNavMobileMenuLnLoggedInNonActive.module.css"; // plasmic-import: ew5ZRTnBxp4gUa/css

export type PlasmicNavMobileMenuLnLoggedInNonActive__VariantMembers = {};

export type PlasmicNavMobileMenuLnLoggedInNonActive__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicNavMobileMenuLnLoggedInNonActive__VariantsArgs;
export const PlasmicNavMobileMenuLnLoggedInNonActive__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNavMobileMenuLnLoggedInNonActive__ArgsType = {};
type ArgPropType = keyof PlasmicNavMobileMenuLnLoggedInNonActive__ArgsType;
export const PlasmicNavMobileMenuLnLoggedInNonActive__ArgProps =
  new Array<ArgPropType>();

export type PlasmicNavMobileMenuLnLoggedInNonActive__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  accountregister?: p.Flex<"a"> & Partial<LinkProps>;
  httpsmsipsbycompgift?: p.Flex<"a"> & Partial<LinkProps>;
  columns?: p.Flex<"div">;
  pagespoints?: p.Flex<"a"> & Partial<LinkProps>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  pagessettings?: p.Flex<"div">;
  accountlogout?: p.Flex<"a"> & Partial<LinkProps>;
  pagesmygift?: p.Flex<"a"> & Partial<LinkProps>;
  httpssipsbyzendeskcomhcenUs?: p.Flex<"a"> & Partial<LinkProps>;
  pagescontact?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultNavMobileMenuLnLoggedInNonActiveProps {}

function PlasmicNavMobileMenuLnLoggedInNonActive__RenderFunc(props: {
  variants: PlasmicNavMobileMenuLnLoggedInNonActive__VariantsArgs;
  args: PlasmicNavMobileMenuLnLoggedInNonActive__ArgsType;
  overrides: PlasmicNavMobileMenuLnLoggedInNonActive__OverridesType;

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
            <div className={classNames(projectcss.all, sty.freeBox__lI4D0)}>
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

          <div className={classNames(projectcss.all, sty.freeBox__e95Tw)}>
            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  sty.freeBox__dx5E7,
                  "sb-logged-out-only" as const
                )}
              >
                <SectionMobileMenuLink
                  className={classNames(
                    "__wab_instance",
                    sty.sectionMobileMenuLink___8Uhco
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
                sty.sectionMobileMenuLink__tvpIz
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
                  sty.sectionMobileMenuSubmenuLink__lMnNi
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
                  sty.sectionMobileMenuSubmenuLink__yoJkC
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
                    sty.text__zFiG
                  )}
                >
                  {"Teaware"}
                </div>
              </SectionMobileMenuSubmenuLink>
            ) : null}

            <SectionMobileMenuSubmenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuSubmenuLink__bzmjo
              )}
              destination={"/collections/tea-gifts" as const}
              submenuLinkSubmenuHandle={"submenu-link-sb-shop-gifts" as const}
            >
              {"Tea Gifts"}
            </SectionMobileMenuSubmenuLink>

            <SectionMobileMenuLink
              className={classNames(
                "__wab_instance",
                sty.sectionMobileMenuLink__rBpr5
              )}
              description={" "}
              destination={"/collections/iced-tea-favorites/" as const}
            >
              {"Iced Tea"}
            </SectionMobileMenuLink>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__nJGsm)}>
                <div className={classNames(projectcss.all, sty.freeBox___6WXE)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__snpsM
                    )}
                  >
                    {"We're the #1 Rated Tea Club"}
                  </div>
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__v181F)}
                >
                  <p.PlasmicLink
                    data-plasmic-name={"accountregister"}
                    data-plasmic-override={overrides.accountregister}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.accountregister
                    )}
                    component={Link}
                    href={"/products/personalized-tea-discovery-box" as const}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__hCwx)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___1TRcR
                        )}
                      >
                        {"Join Now"}
                      </div>
                    </div>
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    data-plasmic-name={"httpsmsipsbycompgift"}
                    data-plasmic-override={overrides.httpsmsipsbycompgift}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.httpsmsipsbycompgift
                    )}
                    component={Link}
                    href={"https://m.sipsby.com/p/gift" as const}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__djv2E)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lcdXm
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
                  sty.freeBox__onT2W,
                  "sb-logged-out-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink__rlGg
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
                  sty.freeBox__vgk4P,
                  "sb-logged-out-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink__q8KdW
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
                  sty.freeBox__t8QUf,
                  "sb-logged-in-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink__zuEgt
                    )}
                    description={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__rjaF
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
                  sty.freeBox__n6V2Q,
                  "sb-logged-in-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink__ueyzG
                    )}
                    description={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pVr6X
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
                  sty.freeBox__y72Yo,
                  "sb-logged-in-only" as const
                )}
              >
                {true ? (
                  <SectionMobileMenuLink
                    className={classNames(
                      "__wab_instance",
                      sty.sectionMobileMenuLink__mBuKt
                    )}
                    description={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__gtxtQ
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
              className={classNames(projectcss.all, sty.column___9IMpz)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__nLCeM)}>
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
                      sty.text__gL89
                    )}
                  >
                    {"POINTS"}
                  </div>
                </p.PlasmicLink>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__ePwoa)}>
                <p.PlasmicLink
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(projectcss.all, projectcss.a, sty.link)}
                  component={Link}
                  href={"/pages/settings" as const}
                  platform={"nextjs"}
                >
                  <div
                    data-plasmic-name={"pagessettings"}
                    data-plasmic-override={overrides.pagessettings}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.pagessettings
                    )}
                  >
                    {"SETTINGS"}
                  </div>
                </p.PlasmicLink>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__b0NhA)}>
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
                      sty.text__hxReQ
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
              className={classNames(projectcss.all, sty.column__m1Vj2)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__ik6Dx)}>
                <p.PlasmicLink
                  data-plasmic-name={"pagesmygift"}
                  data-plasmic-override={overrides.pagesmygift}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.pagesmygift
                  )}
                  component={Link}
                  href={"/pages/mygift" as const}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__keIp
                    )}
                  >
                    {"REDEEM A GIFT CARD"}
                  </div>
                </p.PlasmicLink>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox___2Vn3N)}>
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
                      sty.text__ujO4O
                    )}
                  >
                    {"FAQ"}
                  </div>
                </p.PlasmicLink>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__nJk8N)}>
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
                      sty.text__qSulm
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
    "accountregister",
    "httpsmsipsbycompgift",
    "columns",
    "pagespoints",
    "link",
    "pagessettings",
    "accountlogout",
    "pagesmygift",
    "httpssipsbyzendeskcomhcenUs",
    "pagescontact"
  ],
  img: ["img"],
  accountregister: ["accountregister"],
  httpsmsipsbycompgift: ["httpsmsipsbycompgift"],
  columns: [
    "columns",
    "pagespoints",
    "link",
    "pagessettings",
    "accountlogout",
    "pagesmygift",
    "httpssipsbyzendeskcomhcenUs",
    "pagescontact"
  ],
  pagespoints: ["pagespoints"],
  link: ["link", "pagessettings"],
  pagessettings: ["pagessettings"],
  accountlogout: ["accountlogout"],
  pagesmygift: ["pagesmygift"],
  httpssipsbyzendeskcomhcenUs: ["httpssipsbyzendeskcomhcenUs"],
  pagescontact: ["pagescontact"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  accountregister: "a";
  httpsmsipsbycompgift: "a";
  columns: "div";
  pagespoints: "a";
  link: "a";
  pagessettings: "div";
  accountlogout: "a";
  pagesmygift: "a";
  httpssipsbyzendeskcomhcenUs: "a";
  pagescontact: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavMobileMenuLnLoggedInNonActive__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavMobileMenuLnLoggedInNonActive__VariantsArgs;
    args?: PlasmicNavMobileMenuLnLoggedInNonActive__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicNavMobileMenuLnLoggedInNonActive__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicNavMobileMenuLnLoggedInNonActive__ArgsType, ReservedPropsType> &
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
            PlasmicNavMobileMenuLnLoggedInNonActive__ArgProps,
          internalVariantPropNames:
            PlasmicNavMobileMenuLnLoggedInNonActive__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavMobileMenuLnLoggedInNonActive__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavMobileMenuLnLoggedInNonActive";
  } else {
    func.displayName = `PlasmicNavMobileMenuLnLoggedInNonActive.${nodeName}`;
  }
  return func;
}

export const PlasmicNavMobileMenuLnLoggedInNonActive = Object.assign(
  // Top-level PlasmicNavMobileMenuLnLoggedInNonActive renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    accountregister: makeNodeComponent("accountregister"),
    httpsmsipsbycompgift: makeNodeComponent("httpsmsipsbycompgift"),
    columns: makeNodeComponent("columns"),
    pagespoints: makeNodeComponent("pagespoints"),
    link: makeNodeComponent("link"),
    pagessettings: makeNodeComponent("pagessettings"),
    accountlogout: makeNodeComponent("accountlogout"),
    pagesmygift: makeNodeComponent("pagesmygift"),
    httpssipsbyzendeskcomhcenUs: makeNodeComponent(
      "httpssipsbyzendeskcomhcenUs"
    ),
    pagescontact: makeNodeComponent("pagescontact"),

    // Metadata about props expected for PlasmicNavMobileMenuLnLoggedInNonActive
    internalVariantProps: PlasmicNavMobileMenuLnLoggedInNonActive__VariantProps,
    internalArgProps: PlasmicNavMobileMenuLnLoggedInNonActive__ArgProps
  }
);

export default PlasmicNavMobileMenuLnLoggedInNonActive;
/* prettier-ignore-end */
