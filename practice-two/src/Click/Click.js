import React from "react";
class CountingParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0,
    };
    this.handleAction = this.handleAction.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAction(action) {
    console.log("child syas", action);
    this.setState({
      clickCount: this.state.clickCount + 1,
    });
  }
  handleReset() {
    this.setState({
      clickCount: 0,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAction}> click me</button>
        <button onClick={this.handleReset}> reset me</button>

        <p>Button Clicked {this.state.clickCount} times</p>
      </div>
    );
  }
}
export default CountingParent;
