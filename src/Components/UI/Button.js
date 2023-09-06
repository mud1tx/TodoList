import react from "react";
import classes from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${props.className} ${classes.button} `}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
