import classes from "../Users/ErrorModal.module.css";
import Cards from "../UI/Cards";
import Button from "../UI/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.overlay} onClick={props.onConfirm}></div>
      <Cards className={classes.cardlist}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Cards>
    </div>
  );
};

export default ErrorModal;
