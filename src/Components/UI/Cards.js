import react from "react";
import classes from "../UI/Cards.module.css";

const Cards = (props) => {
  return (
    <div className={`${props.className} ${classes.cards}`}>
      {props.children}
    </div>
  );
};

export default Cards;
