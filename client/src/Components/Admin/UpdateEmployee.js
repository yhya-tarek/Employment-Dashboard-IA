import "../../style/AddJob.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import { FaPlus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import "../../style/AddEmployee.css";
export default function Pop() {
  const [isShown, setIsShown] = useState(false);
  const [skills, setSkill] = useState("");
  const [error, setError] = useState("");
  const [addemployee, setaddemployee] = useState({
    employeeId: "",
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
  const {
    employeeId,
    name,
    Email,
    password,
    phone,
    status,
    type,
    image_url,
    bio,
    skill,
  } = addemployee;
  const onInputChange = (e) => {
    setaddemployee({ ...addemployee, [e.target.name]: e.target.value });
  };

  const updateEmployeeBtn = async (e) => {
    //  console.log(e.target[0].value);
    e.preventDefault();
    await axios
      .put(
        `http://localhost:5000/admin/user/${addemployee.employeeId}`,
        addemployee
      )
      .then((res) => {
        if (res.data) {
          alert(res.data.msg);
        }
      })

      .catch((err) => {
        alert("There was an error");
        console.log(err);
      });
  };

  const getEmployee = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/admin/user/${addemployee.employeeId}`)
      .then((res) => {
        if (res.data) {
          axios
            .get(`http://localhost:5000/admin/skills/${addemployee.employeeId}`)
            .then((response) => {
              if (response.data[0] !== null) {
                const skillls = [];
                response.data.forEach((elem) => skillls.push(elem.skill));
                setSkill(skillls.join(","));
                // setaddemployee({
                //   ...addemployee,
                //   skill: skills.join(","),
                // });
              } else {
                setSkill("");
              }
            })
            .catch((err) => console.log(err));
          setError("");
          setaddemployee({
            ...addemployee,
            name: res.data[0].name,
            Email: res.data[0].Email,
            password: res.data[0].password,
            phone: res.data[0].phone,
            status: res.data[0].status,
            type: res.data[0].type,
            // image_url: "",
            bio: res.data[0].bio,
            skill: skills,
          });
        }
      })
      .catch((err) => {
        if (err) setError("There is no employee with this id");
      });
  };

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  //   const onSubmit = async (e) => {
  //     //  console.log(e.target[0].value);
  //     e.preventDefault();
  //     alert("new employee is added");
  //     await axios
  //       .post("http://localhost:5000/admin/user", addemployee)
  //       .catch((err) => console.log(err));
  //   };
  return (
    <div>
      <button className="icon-button" onClick={handleClick}>
        <FaPlus></FaPlus> &nbsp;Update Employee
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form onSubmit={(e) => updateEmployeeBtn(e)}>
          <div className="AddEmployee-Contianer">
            <div className="title">
              <div className="close" onClick={handleClick}>
                <h3>
                  <FaWindowClose></FaWindowClose>
                </h3>
              </div>
              <h2>Update Employee</h2>
              <hr className="add-employee-hr"></hr>
            </div>

            <div className="Job-content">
              {/* <Upload></Upload> */}
              <form>
                <label>
                  {" "}
                  Employee Id
                  <input
                    id="inp"
                    name="employeeId"
                    value={employeeId}
                    type="text"
                    onChange={(e) => onInputChange(e)}
                  ></input>
                  <button
                    className="post-button"
                    onClick={(e) => getEmployee(e)}
                  >
                    Get Employee
                  </button>
                  {error ? (
                    <div
                      style={{
                        color: "red",
                        paddingBottom: "15px",
                        paddingLeft: "5px",
                      }}
                    >
                      {error}
                    </div>
                  ) : null}
                </label>
              </form>
              <label></label>
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

              <button className="add-button">Update</button>
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
