import React, { useState } from "react";
interface FormFields {
  email: HTMLInputElement;
  message: HTMLInputElement;
}
interface InitialState {
  email: string;
  message: string;
  color: string;
}
// type FormState = InitialState[];
export const Form = () => {
  const initState = {
    email: "",
    message: "",
    color: "",
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
    let mail = target.email;
    console.log(mail);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <select name="color" id="rating" onChange={onChangeHandler}>
          <option selected disabled>
            Choose one
          </option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>{formState.email}</p>
        <p>{formState.message}</p>
        <p style={{ color: `${formState.color}`, fontSize: "2rem" }}>
          {formState.color}
        </p>
      </div>
    </div>
  );
};
