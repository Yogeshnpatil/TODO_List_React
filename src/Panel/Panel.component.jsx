import React from "react";
import TextBox from "../TextBox/TextBox.component";
import CardList from "../CardList/CardList.component";
import "./Panel.styles.css";
import { v4 as uuidv4 } from "uuid";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          key: uuidv4(),
          name: "Complete Analyze Project with react JS.",
        },
        {
          key: uuidv4(),
          name: "Start preparing for interview.",
        },
        {
          key: uuidv4(),
          name: "I love react.",
        },
      ],
    };
  }

  addUser = (event) => {
    if (event.key === "Enter") {
      this.setState({
        userList: [
          ...this.state.userList,
          { key: uuidv4(), name: event.target.value },
        ],
      });
      document.getElementById(event.target.id).value = "";
    }
  };
  removeUser = (event) => {
    this.setState({
      userList: this.state.userList.filter(
        (user) => user.key !== event.target.id
      ),
    });

    console.log(this.state.userList);
  };
  render() {
    return (
      <div className="Panel">
        <label className="label">To Do List</label>
        <TextBox name="addText" id="addText" handleKeyPress={this.addUser} />
        <CardList users={this.state.userList} handleClick={this.removeUser} />
      </div>
    );
  }
}

export default Panel;
