// fetch api with class component

import React from "react";
import axios from "axios";
import "./Joke.css";
class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data:[],
      data: "",
      icon: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    };
  }
  componentDidMount() {
    axios.get(`https://api.chucknorris.io/jokes/random`).then((response) => {
      const joke = response.data.value;
      this.setState({ data: joke });
      // this.setState({ data: [...this.state.data, joke] });
    });
  }

  render() {
    return (
      <div>
        <h1>Joke</h1>
        <img className="icon" src={this.state.icon} alt="icon" />
        <p className="joke">{this.state.data}</p>
      </div>
    );
  }
}
class JokeMania extends React.Component {
  state = {
    reqKey: Math.random(),
  };
  handleClick = () => {
    this.setState({ reqKey: Math.random() });
  };
  render() {
    return (
      <div className="joke_wrapper">
        <Jokes key={this.state.reqKey} />

        <button onClick={this.handleClick}>Reload</button>
      </div>
    );
  }
}
export default JokeMania;
