import React from "react";
interface FormFields {
  email: HTMLInputElement;
  message: HTMLInputElement;
}

export const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as typeof e.target & FormFields;
    let mail = target.email;
    console.log(mail);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" placeholder="enter email address" />
        </label>
        <label htmlFor="message">
          Message:
          <input
            type="message"
            name="message"
            placeholder="enter your message"
          />
        </label>
      </form>
    </div>
  );
};
