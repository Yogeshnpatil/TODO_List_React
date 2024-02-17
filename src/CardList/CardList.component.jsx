import React from "react";
import "./CardList.styles.css";

const CardList = (props) => {
  return (
    <div>
      <table>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.key}>
              <td class="list">
                <span>{user.name}</span>
                <span>
                  <button
                    onClick={props.handleClick}
                    class="delete"
                    id={user.key}
                  >
                    X
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardList;
