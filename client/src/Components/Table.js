import { useState } from "react";
import { FaDots } from "react-icons/fa";
import Icon from "../assets/images/verticalDots.png";
const INITIAL_STATE = [
  { id: 2, name: "Yahia", position: "Design", status: "pending" },
  { id: 3, name: "Ayman", position: "Market", status: "pending" },
  { id: 4, name: "Hazim", position: "Developer", status: "pending" },
  { id: 2, name: "Yahia", position: "Design", status: "pending" },
  { id: 3, name: "Ayman", position: "Market", status: "pending" },
  { id: 4, name: "Hazim", position: "Developer", status: "pending" },
];

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

function Table() {
  const [users, setUsers] = useState(INITIAL_STATE);
  const [Reqstatus, setStatus] = useState("pending");
  const accept = () => {
    setStatus("Accepted");
  };
  const decline = () => {
    setStatus("Declined");
  };

  const renderUsers = () => {
    return users.map(({ id, name, position, status }) => {
      return (
        <tr key={id}>
          <td style={{ padding: "10px", border: "1px solid black" }}>{id}</td>
          <td style={{ padding: "10px", border: "1px solid black" }}>{name}</td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {position}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {Reqstatus}
          </td>
          {/* <button id='three-dots'> */}

          <button className="accept-button" onClick={accept}>
            {/* <img alt='three-dots-icon' src={Icon}></img> */}
            Accept
          </button>
          <button className="decline-button" onClick={decline}>
            {/* <img alt='three-dots-icon' src={Icon}></img> */}
            Decline
          </button>
        </tr>
      );
    });
  };

  const renderHeader = () => {
    return (
      <tr className="table-header">
        {Object.keys(INITIAL_STATE[0]).map((key) => (
          <th>{capitalize(key)}</th>
        ))}
      </tr>
    );
  };

  return (
    <table id="table">
      {renderHeader()}
      <tbody>{renderUsers()}</tbody>
    </table>
  );
}

export default Table;
