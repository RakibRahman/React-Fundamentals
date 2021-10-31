import React, { useState } from "react";
interface FormFields {
  email: HTMLInputElement;
  message: HTMLInputElement;
}

interface InitialState {
  email: string;
  message: string;
  color: string;
  basic: boolean;
  pro: boolean;
  ultra: boolean;
  shirtSize: string;
  subscribe: string;
  points: number;
}
// type FormState = InitialState[];
export const Form = () => {
  const initState = {
    email: "",
    message: "",
    color: "",
    basic: true,
    pro: false,
    ultra: false,
    shirtSize: "",
    subscribe: "",
    points: 0,
  };
  const [formState, setFormState] = useState<InitialState>(initState);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;

    setFormState({ ...formState, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & FormFields;
    let mail = target.email.value;
    console.log(mail);
    alert(JSON.stringify(formState));
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              placeholder="enter email address"
              value={formState.email}
              onChange={onChangeHandler}
            />
          </label>
          <label htmlFor="message">
            Message:
            <input
              type="message"
              name="message"
              placeholder="enter your message"
              value={formState.message}
              onChange={onChangeHandler}
            />
          </label>
        </fieldset>
        <select name="color" id="rating" onChange={onChangeHandler}>
          <option>Choose one</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        {/* //! checkbox */}
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
          <input
            type="radio"
            name="shirtSize"
            id="small"
            value="s"
            onChange={onChangeHandler}
            checked={formState.shirtSize === "s"}
          />
          <label htmlFor="small">Small</label>

          <input
            type="radio"
            name="shirtSize"
            id="medium"
            value="m"
            onChange={onChangeHandler}
            checked={formState.shirtSize === "m"}
          />
          <label htmlFor="small">Medium</label>

          <input
            type="radio"
            name="shirtSize"
            id="large"
            value="l"
            onChange={onChangeHandler}
            checked={formState.shirtSize === "l"}
          />
          <label htmlFor="small">large</label>
        </fieldset>
        <fieldset>
          <label> subscribe to newsletters?</label>
          <br />
          <label htmlFor="subscribe-yes">
            Yes
            <input
              type="radio"
              id="subscribe-yes"
              name="subscribe"
              value="yes"
              onChange={onChangeHandler}
              checked={formState.subscribe === "yes"}
            />
          </label>
          <br />
          <label htmlFor="subscribe-no">
            No
            <input
              type="radio"
              id="subscribe-no"
              name="subscribe"
              value="no"
              onChange={onChangeHandler}
              checked={formState.subscribe === "no"}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="points">Points (between 0 and 10):</label>
          <input
            type="range"
            id="points"
            name="points"
            min="0"
            max="10"
            value={formState.points}
            onChange={onChangeHandler}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
