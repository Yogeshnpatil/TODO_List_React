import React from "react";
import ReactDom from "react-dom";
import Panel from "./Panel/Panel.component";

const App = () => {
  return (
    <div>
      <Panel />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
