import react, { useState } from "react";
import classes from "../Users/AddList.module.css";
import Cards from "../UI/Cards";

const AddList = (props) => {
  const removeListHandler = (event) => {
    console.log(event)
    props.onDeleteItem(event.target.innerText);
    // console.log(event.target)
  };
  return (
    <Cards className={classes.lists}>
      <ul>
        {props.contentList.map((content) => (
          <li key={content.id} onClick={removeListHandler}>
            {content.list}
          </li>
        ))}
      </ul>
    </Cards>
  );
};

export default AddList;
