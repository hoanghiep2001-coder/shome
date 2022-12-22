import { Link } from "react-router-dom";

function Button({
  to,
  href,
  primary,
  onClick,
  children,
  className,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    className,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  return (
    <Component {...props}>
      <span>{children}</span>
    </Component>
  );
}

export default Button;
