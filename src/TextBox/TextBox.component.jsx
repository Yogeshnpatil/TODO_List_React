import React from "react";
import "./TextBox.styles.css";

const TextBox = (props) => {
  return (
    <input
      type="text"
      name="{props.name}"
      id="{props.id}"
      className="TextBox"
      onKeyPress={props.handleKeyPress}
    />
  );
};

export default TextBox;
