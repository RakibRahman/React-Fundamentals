import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {
          name: "pain",
          age: 25,
          bio: "This World Shall Know Pain",
          jutsu: ["Shinra tensei", "chibaku tensei"],
        },
        {
          name: "obito",
          age: 25,
          bio: "You let her die",
          jutsu: ["Kamui", "Genjutsu"],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.profiles[0].name}</h1>
        <h3>{this.state.profiles[0].age}</h3>
        <p>Quote: {this.state.profiles[0].bio}</p>
        <h4>Jutsus:</h4>
        <ul>
          <li>{this.state.profiles[0].jutsu[0]}</li>
          <li>{this.state.profiles[0].jutsu[1]}</li>
        </ul>
      </div>
    );
  }
}
export default Profile;
