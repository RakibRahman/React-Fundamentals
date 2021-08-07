import React, { useState } from "react";
const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    hobby: "Games",
    info: "",
    agree: false,
  };
  const [formState, setFormState] = useState(initialState);
  const onFirstChangeHandler = (e) => {
    setFormState({
      ...formState,
      firstName: e.target.value,
    });
  };
  const onLastChangeHandler = (e) => {
    setFormState({
      ...formState,
      lastName: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
  };
  const onClickHandler = () => {
    setFormState(initialState);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="f-name">First Name</label>
        <input
          id="f-name"
          name="f-name"
          onChange={onFirstChangeHandler}
          value={formState.firstName}
        />
        <br />
        <label htmlFor="l-name">Last Name</label>
        <input
          id="l-name"
          name="l-name"
          onChange={onLastChangeHandler}
          value={formState.lastName}
        />
        <br />
        <label htmlFor="hobby">Hobby:</label>
        <select
          id="hobby"
          value={formState.hobby}
          onChange={(e) =>
            setFormState({
              ...formState,
              hobby: e.target.value,
            })
          }
        >
          <option value="Games">Games</option>
          <option value="Games">Movie</option>
          <option value="Games">Drama</option>
          <option value="Anime">Anime</option>
        </select>
        <br />

        <br />
        <label htmlFor="info">About Yourself:</label>
        <textarea
          id="info"
          name="info"
          value={formState.info}
          onChange={(e) => {
            setFormState({
              ...formState,
              info: e.target.value,
            });
          }}
        />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={onClickHandler}>
          Reset
        </button>
      </form>

      <div>
        <p>
          Full Name: {formState.firstName} {formState.lastName}
        </p>
        <p>Hobby:{formState.hobby}</p>
      </div>
    </>
  );
};
export default Form;
