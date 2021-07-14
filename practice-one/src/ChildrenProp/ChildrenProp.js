import React from "react";

const ChildProp = () => {
  function Cat({ type, name }) {
    return (
      <div className={`cat ${type ? `cat__${type}` : ""}`}>
        <p>Cat Name: {name}</p>
      </div>
    );
  }
  function Container({ children }) {
    let itemOne = React.Children.toArray(children); //! converts children into a flat array
    // return <div className="container">{itemOne[0]}</div>; //? return first children only
    //return <div className="container">{itemOne[itemOne.length - 1]}</div>; //? return last children only
    return <div className="container">{children}</div>;
  }
  function Button(props) {
    return <button>{props.children}</button>;
  }
  return (
    <div>
      <Container>
        <h1>This Is Heading</h1>
        <p>This is some text</p>
        <Button> Click Me </Button>
      </Container>
      <Cat name="BengalCat" type="bengal" />
    </div>
  );
};
export default ChildProp;
