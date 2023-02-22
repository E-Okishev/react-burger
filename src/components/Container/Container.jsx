import classNames from "classnames";
import style from "./Container.module.css";

function Container({ children, className }) {
  return (
  <div className={classNames(style.container, className)}>
    {children}
  </div>
  )
}

export default Container;
