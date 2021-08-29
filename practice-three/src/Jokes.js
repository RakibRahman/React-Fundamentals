// fetch api with class component

import React from "react";
import axios from "axios";

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
        <img src={this.state.data[1]} alt="icon" />
        <p>{this.state.data[0]}</p>
      </div>
    );
  }
}
export default Jokes;
