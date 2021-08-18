import "./Record.css";
import React, { useState } from "react";
const recordsData = [
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    description:
      "The Hobbit, or There and Back Again is a children's fantasy novel",
  },
  {
    title: "The Bad Seed",
    author: "Oda Miya",
    description: "About world war 3",
  },
];
const Record = (_) => {
  const [records, setRecords] = useState(recordsData);

  const Form = (_) => {
    return (
      <>
        <form>
          <h3>Add a new Record</h3>
          <label htmlFor="title">Book Title</label>
          <input type="text" id="title" name="title" />

          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </>
    );
  };
  const Info = ({ records }) => (
    <div>
      {records.map(({ tiitle, author, description }) => (
        <div key={author}>
          <h2>{tiitle}</h2>
          <h3>{author}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );

  const List = (_) => {
    return (
      <div className="list-container">
        <Info records={records} />
      </div>
    );
  };
  return (
    <div className="container">
      <h1 className="c-title">My Favorite Records</h1>
      <div className="wrapper">
        <Form />
        <List />
      </div>
    </div>
  );
};
export default Record;
