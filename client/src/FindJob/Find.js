// import React from "react";
// import About from "../Components/about/About";
import "./find.css";
import tesla from "../assets/tesla.jpg";
import amazon from "../assets/amazon.jpg";
import { Link } from "react-router-dom";
import Pop from "./Pop";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
import { useNavigate } from "react-router-dom";

// const fakedata = [
//   {
//     id: 54,
//     title: "lksjfslf",
//     name: "kfjsl",
//     desc: "ksjflsfjlksjf",
//   },
// ];

const Find = () => {
  const [jobs, setJobs] = useState([]);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const result = [];

  const submitRequist = (e, job_id) => {
    e.preventDefault();
    try {
      if (window.sessionStorage.getItem("id")) {
        axios
          .post("http://localhost:5000/applicant/request", {
            job_id: job_id,
            user_id: window.sessionStorage.getItem("id"),
            withCredentials: true,
          })
          .then((response) => {
            if (response) {
              console.log(response);
            }
          })
          .catch((err) => console.log("you have already requested this job"));
      } else {
        navigate("/login");
      }
    } catch (error) {}
  };

  useEffect(() => {
    // axios.withCredentials = true;
    axios
      .get("http://localhost:5000/applicant/jobs")
      .then((response) => {
        if (response.data) {
          setJobs(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        // setError(error.response.data.msg);
      });
  }, []);

  jobs.forEach((currentValue, index, arr) => {
    result.push(
      <div className="job_card">
        <div className="job_name">
          <img src={amazon} alt="" className="job-profile" />
          <div className="job_detail">
            <h4>{currentValue.companyName}</h4>
            <h3>{currentValue.position}</h3>
            <p>{currentValue.Description}</p>
          </div>
        </div>
        {/* <button className='viewButton'><Link to={"/jobdetails"}> view </Link></button> */}
        <Pop data={currentValue}></Pop>

        <button
          type="submit"
          onClick={(event) => submitRequist(event, currentValue.job_id)}
          className="viewButton"
        >
          Request
          {/* <Link> Request </Link> */}
        </button>
      </div>
    );
  });

  return (
    <>
      <Header></Header>

      <div>
        <div className="search_wrapper">
          <div className="search_box">
            <div className="search_card">
              <input
                className="search_input"
                type="text"
                placeholder="Job title or keywirds"
              />
              <button className="search_button">Search</button>
            </div>
          </div>

          <div className="filter-box">
            <div className="filter-dropdown">
              <select
                className="filter-select"
                id="job-function"
                name="job-function"
              >
                <option>job function</option>
                <option>IT</option>
                <option>management</option>
                <option>hr</option>
              </select>
            </div>
          </div>
          <hr></hr>

          <section className="job_list" id="jobs">
            {/* <Link to={"/jobdetails" } > */}
            <div>{result}</div>
          </section>
        </div>
        <div className="Footer-find">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Find;
