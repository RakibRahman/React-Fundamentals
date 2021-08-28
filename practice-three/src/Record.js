import "./Record.css";
import React, { useState, Fragment } from "react";
import Input from "./Input.js";

const Record = (_) => {
  const [records, setRecords] = useState([]);
  const [borderClr, setBorderClr] = useState(false);
  const [liveText, setLiveText] = useState("w");

  const onSubmitHandler = (entry) => {
    setRecords(
      [...records, entry].sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      })
    );
  };
  const Headline = ({ tagline }) => <h1 className="tagline">{tagline}</h1>;
  const Form = ({ onSubmit }) => {
    const initEntry = {
      title: "",
      author: "",
      description: "",
    };
    const [entry, setEntry] = useState(initEntry);

    const formSubmit = (e) => {
      e.preventDefault();
      if (!entry.title || !entry.author) return false;
      console.log(entry);
      onSubmit({ ...entry }); //! spread to add new data to array
      setEntry(initEntry);
      setBorderClr((e) => !e);
      setLiveText(`${entry.title} has successfully submitted`);
    };
    const onChangeHandler = (e) => {
      setEntry({
        ...entry,
        [e.target.name]: e.target.value,
      });
    };

    return (
      <>
        <form onSubmit={formSubmit}>
          <h3>Add a new Record</h3>

          <Input
            labelText="Book Name"
            name="title"
            onChange={onChangeHandler}
            value={entry.title}
          />
          <Input
            labelText="Book Author"
            onChange={onChangeHandler}
            value={entry.author}
            name="author"
          />
          <Input
            type="textarea"
            name="description"
            labelText="Description"
            value={entry.description}
            onChange={onChangeHandler}
          />
          <button type="submit">Add</button>
        </form>
      </>
    );
  };
  const Info = ({ records }) => (
    <div className={borderClr ? "list-container apply" : "list-container"}>
      {records.map(({ title, author, description }) => (
        <div key={title} className="list">
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );

  const List = (_) => {
    return (
      <div>
        <Info records={records} />
      </div>
    );
  };
  return (
    <Fragment>
      <div className="container">
        <Headline tagline="My Favorite Books" />
        <div className="wrapper">
          <Form onSubmit={onSubmitHandler} />
          <List />
        </div>
      </div>
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {liveText}
      </div>
    </Fragment>
  );
};
export default Record;
