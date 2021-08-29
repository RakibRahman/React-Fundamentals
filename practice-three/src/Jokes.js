// fetch api with class component

import React from "react";
import axios from "axios";
import "./Joke.css";
class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get(`https://api.chucknorris.io/jokes/random`).then((response) => {
      const joke = response.data.value;
      const icon = response.data.icon_url;
      this.setState({ data: [...this.state.data, joke, icon] });

      console.log(this.state.data);
    });
  }

  render() {
    return (
      <div>
        <h1>Joke</h1>
        <img className="icon" src={this.state.data[1]} alt="icon" />
        <p className="joke">{this.state.data[0]}</p>
        <h1>{this.state.reqKey}</h1>
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
    console.log(this.state.reqKey);
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
