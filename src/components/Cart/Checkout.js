import classes from "./Checkout.module.css";
import { useState } from "react";

const inputIsValid = (value) => value.trim() !== "";

const Checkout = (props) => {
  const [nameState, setNameState] = useState("");
  const [streetState, setStreetState] = useState("");
  const [postalState, setPostalState] = useState("");
  const [cityState, setCityState] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);
  const dataArr = [nameState, streetState, postalState, cityState];

  const confirmHandler = (event) => {
    event.preventDefault();
    const validation = dataArr.every((el) => inputIsValid(el));
    console.log(dataArr);
    console.log(validation);

    if (!validation) {
      setFormIsValid(false);
      return;
    }

    setNameState("");
    setStreetState("");
    setPostalState("");
    setCityState("");
    setFormIsValid("");
    setFormIsValid(true);
    props.onConfirm({
      name: nameState,
      street: streetState,
      postal: postalState,
      city: cityState,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${formIsValid ? "" : classes.invalid}`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={(event) => {
            setNameState(event.target.value);
          }}
          value={nameState}
        />
      </div>
      <div
        className={`${classes.control} ${formIsValid ? "" : classes.invalid}`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={(event) => {
            setStreetState(event.target.value);
          }}
          value={streetState}
        />
      </div>
      <div
        className={`${classes.control} ${formIsValid ? "" : classes.invalid}`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={(event) => {
            setPostalState(event.target.value);
          }}
          value={postalState}
        />
      </div>
      <div
        className={`${classes.control} ${formIsValid ? "" : classes.invalid}`}
      >
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={(event) => {
            setCityState(event.target.value);
          }}
          value={cityState}
        />
      </div>
      {!formIsValid && <h5>Invalid input, please try a valid input</h5>}
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
