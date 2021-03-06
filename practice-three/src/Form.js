import React, { useState } from "react";
const initialState = {
  firstName: "",
  lastName: "",
  hobby: "Games",
  info: "",
  agree: false,
  basic: false,
  pro: false,
  ultra: false,
  shirtSize: "",
};
const loadState = {
  firstName: "Rakib",
  lastName: "Talukder",
  hobby: "Games",
  info: "This world shall know pain",
  agree: true,
  basic: false,
  pro: true,
  ultra: false,
  shirtSize: "l",
};

const Form = () => {
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
  const loadDefault = () => {
    setFormState(loadState);
  };

  const Form = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="f-name">Last Name</label>

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
          <label htmlFor="chkbox">Checkbox:</label>
          <input
            type="checkbox"
            id="chkbox"
            name="chkbox"
            checked={formState.agree}
            onChange={(e) => {
              setFormState({
                ...formState,
                agree: e.target.checked,
              });
            }}
          />
          <fieldset>
            <legend>Select your Plan</legend>
            <label htmlFor="basic">Basic Plan</label>
            <input
              type="checkbox"
              id="basic"
              name="basic"
              checked={formState.basic}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  basic: e.target.checked,
                });
              }}
            />
            <label htmlFor="pro">Pro Plan</label>
            <input
              type="checkbox"
              id="pro"
              name="pro"
              checked={formState.pro}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  pro: e.target.checked,
                });
              }}
            />
            <label htmlFor="ultra">Ultra Plan</label>
            <input
              type="checkbox"
              id="ultra"
              name="ultra"
              checked={formState.ultra}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  ultra: e.target.checked,
                });
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Chose your T-shirt Size</legend>
            <label htmlFor="easy"></label>
            <input
              type="radio"
              name="shirtSize"
              id="small"
              value="s"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  shirtSize: e.target.value,
                });
              }}
              checked={formState.shirtSize === "s"}
            />
            <label htmlFor="small">Small</label>

            <input
              type="radio"
              name="shirtSize"
              id="medium"
              value="m"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  shirtSize: e.target.value,
                });
              }}
              checked={formState.shirtSize === "m"}
            />
            <label htmlFor="small">Medium</label>

            <input
              type="radio"
              name="shirtSize"
              id="large"
              value="l"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  shirtSize: e.target.value,
                });
              }}
              checked={formState.shirtSize === "l"}
            />
            <label htmlFor="small">large</label>
          </fieldset>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClickHandler}>
            Reset
          </button>
          <button type="button" onClick={loadDefault}>
            Load Default
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

  return (
    <>
      <Form />
    </>
  );
};
export default Form;
