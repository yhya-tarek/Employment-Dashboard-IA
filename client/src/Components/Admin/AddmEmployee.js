import "../../style/AddJob.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import { FaPlus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import "../../style/AddEmployee.css";
export default function Pop() {
  const [isShown, setIsShown] = useState(false);
  const [addemployee, setaddemployee] = useState({
    name: "",
    Email: "",
    password: "",
    phone: "",
    status: "",
    type: "",
    image_url: "",
    bio: "",
    skill: "",
  });
  // destructing
  const { name, Email, password, phone, status, type, image_url, bio, skill } =
    addemployee;
  const onInputChange = (e) => {
    setaddemployee({ ...addemployee, [e.target.name]: e.target.value });
  };

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const onSubmit = async (e) => {
    //  console.log(e.target[0].value);
    e.preventDefault();
    // alert("new employee is added");
    await axios
      .post("http://localhost:5000/admin/user", addemployee)
      .then((res) => alert(res.data.msg))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button className="icon-button" onClick={handleClick}>
        <FaPlus></FaPlus> &nbsp;Add Employee
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="AddEmployee-Contianer">
            <div className="title">
              <div className="close" onClick={handleClick}>
                <h3>
                  <FaWindowClose></FaWindowClose>
                </h3>
              </div>
              <h2>Add Employee</h2>
              <hr className="add-employee-hr"></hr>
            </div>

            <div className="Job-content">
              {/* <Upload></Upload> */}
              <label>
                {" "}
                name
                <input
                  id="inp"
                  value={name}
                  name="name"
                  onChange={(e) => onInputChange(e)}
                  type="text"
                ></input>
              </label>

              <label>
                {" "}
                password
                <input
                  id="inp"
                  value={password}
                  name="password"
                  onChange={(e) => onInputChange(e)}
                  type="password"
                ></input>
              </label>
              <label>
                {" "}
                Email
                <input
                  id="inp"
                  value={Email}
                  name="Email"
                  onChange={(e) => onInputChange(e)}
                  type=""
                ></input>
              </label>
              <input
                value={image_url}
                id="inp"
                name="image_url"
                onChange={(e) => onInputChange(e)}
                type="file"
                accept="image/*"
              />
              <label>
                {" "}
                Mobile number
                <input
                  id="inp"
                  value={phone}
                  name="phone"
                  onChange={(e) => onInputChange(e)}
                  type=""
                ></input>
              </label>
              <label>
                {" "}
                Skills
                <input
                  value={skill}
                  id="inp"
                  name="skill"
                  onChange={(e) => onInputChange(e)}
                  type=""
                ></input>
              </label>
              <label> Bio</label>
              <textarea
                value={bio}
                name="bio"
                id="inp"
                onChange={(e) => onInputChange(e)}
                rows="4"
                cols="30"
              ></textarea>

              <label>
                {" "}
                type
                <input
                  id="inp"
                  value={type}
                  name="type"
                  onChange={(e) => onInputChange(e)}
                  type="text"
                ></input>
              </label>
              <label>
                {" "}
                status
                <input
                  id="inp"
                  value={status}
                  name="status"
                  onChange={(e) => onInputChange(e)}
                  type="text"
                ></input>
              </label>

              <button className="add-button">Add now!</button>
              {/* <button className="delete-button">Delete now!</button> */}
            </div>
          </div>
        </form>
      ) : null}

      {isShown ? <></> : null}
    </div>
  );
}

// function Box() {
//   return (
//     <div>
//       <h2>Box</h2>
//     </div>
//   );
// }
// const Upload =()=>{
//           var loadFile = function(event) {
//               var image = document.getElementById('output');
//               image.src=URL.createObjectURL(event.target.files[0]);

//           }
//         };
