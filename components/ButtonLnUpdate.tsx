import * as React from "react";
import {
  PlasmicButtonLnUpdate,
  DefaultButtonLnUpdateProps
} from "./plasmic/copy_of_sips_by_website/PlasmicButtonLnUpdate";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface ButtonLnUpdateProps extends DefaultButtonLnUpdateProps {}

function ButtonLnUpdate_(props: ButtonLnUpdateProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicButtonLnUpdate.useBehavior<ButtonLnUpdateProps>(props, ref);
  return <PlasmicButtonLnUpdate {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<ButtonLnUpdateProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonLnUpdateProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const ButtonLnUpdate = React.forwardRef(
  ButtonLnUpdate_
) as any as ButtonComponentType;

export default Object.assign(ButtonLnUpdate, {
  __plumeType: "button"
});
