import classes from "./EventItem.module.css";
import { Link, Form, useSubmit } from "react-router-dom";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure");
    console.log("window", proceed);
    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <Form>
          <button onClick={startDeleteHandler}>Delete</button>
        </Form>
      </menu>
    </article>
  );
}

export default EventItem;
