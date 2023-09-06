import react, { useState } from "react";
import classes from "./AddUsers.module.css";
import Cards from "../UI/Cards";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

const AddUsers = (props) => {
  const [texter, setText] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (event.target[0].value.trim().length === 0) {
      setError({
        title: "Invalid text",
        message: "Please enter some text to create your To-Do. ",
      });
      return;
    }
    props.onListSubmit(event.target[0].value);
    setText("");
  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Cards className={classes.addUsers}>
        <form onSubmit={onSubmitHandler}>
          <div>
            <header className={classes.heading}>Todo List</header>
          </div>
          <div>
            <label>Text:</label>
            <input
              type="text"
              value={texter}
              onChange={textChangeHandler}
            ></input>
          </div>
          <div>
            <Button className="submit_btn" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Cards>
    </div>
  );
};

export default AddUsers;
