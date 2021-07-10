import React from "react";

class Info extends React.Component {
  render() {
    let jutsus = this.props.jutsu.map((j) => {
      return <li>{j}</li>;
    });
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.age}</h3>
        <p>Quote:{this.props.bio} </p>
        <h4>Jutsus:</h4>
        <ul>{jutsus}</ul>
      </div>
    );
  }
}
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
    this.addNinja = this.addNinja.bind(this);
  }
  addNinja(e) {
    let user = {
      name: "Kakashi",
      age: 25,
      bio: "Copy Ninja",
      jutsu: ["Kamui", "Genjutsu"],
    };
    this.setState({
      profiles: this.state.profiles.concat(user),
    });
  }
  render() {
    let infos = this.state.profiles.map((profile) => {
      return (
        <div>
          <Info
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            jutsu={profile.jutsu}
          />
        </div>
      );
    });

    return (
      <div>
        {infos}

        <button onClick={this.addNinja}>Add New Ninja</button>
      </div>
    );
  }
}
export default Profile;
