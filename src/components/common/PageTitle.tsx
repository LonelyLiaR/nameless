import React from "react";
import { Helmet } from "react-helmet";
import { BLOG_TITLE } from "configs";

interface IProps {
  children?: string | React.ReactElement;
}

export default (props: IProps) => {
  const { children } = props;
  const title =
    typeof children === "string"
      ? children
      : typeof children === "object" &&
        children.type !== null &&
        typeof children.props.children === "string"
      ? children.props.children
      : "";
  return (
    <>
      <Helmet>
        <title>
          {!!title ? `${title} - ` : ""}
          {BLOG_TITLE}
        </title>
      </Helmet>
      {typeof children === "object" ? children : ""}
    </>
  );
};
