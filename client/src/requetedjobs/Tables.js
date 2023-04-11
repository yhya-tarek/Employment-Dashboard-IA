import { useState } from "react";
import { useEffect } from "react";

import "./table.css";
// import { FaDots } from 'react-icons/fa';
// import Icon from '../assets/images/verticalDots.png';

import axios from "axios";

// const result = JSON.parse(any)

// any.forEach(value=>result.push({id:value.id , name: value.name, position: value.position, status: value.status}))

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

function Table() {
  const [any, setAny] = useState([]);
  // console.log(any)
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/applicant/request/${window.sessionStorage.getItem(
          "id"
        )}`
      )
      .then((response) => {
        if (response.data) {
          setAny(response.data);
          // console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const INITIAL_STATE = [
    { user_id: any, job_id: any, response: any, date: any },
  ];

  const renderUsers = () => {
    return any.map(({ user_id, job_id, response, date }) => {
      return (
        <tr key={user_id}>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {user_id}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {job_id}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {response}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>{date}</td>
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
    <table>
      {renderHeader()}
      <tbody>{renderUsers()}</tbody>
    </table>
  );
}

export default Table;
