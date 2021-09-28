import React, { useEffect, useState, useRef } from "react";

const Effect = () => {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("type something");
  const [text, setText] = useState("");
  const textInput = useRef();

  useEffect(() => {
    console.log(textInput.current);
    localStorage.setItem("info", JSON.stringify(message));

    console.log(message);
    document.title = "use Effect";
    if (modal) {
      textInput.current.focus();
    }
  }, [message, modal]);
  const handleModal = () => {
    setModal(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(false);

    setText(message);
  };
  const handleClose = () => {
    setMessage(JSON.parse(localStorage.getItem("info")));
    setModal(!modal);
  };
  return (
    <div>
      <h1>useEffect</h1>
      {modal && (
        <form onSubmit={handleSubmit}>
          <button type="button" onclick={handleClose}>
            close
          </button>
          <label>Enter Something:</label>
          <textarea
            ref={textInput}
            name="txt"
            id="txt"
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button type="submit" value="submit">
            submit
          </button>
        </form>
      )}
      <button onClick={handleModal}>add something</button>
      <div>
        <h2>output</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Effect;
