import "./find.css";
import tesla from "../assets/tesla.jpg";
import amazon from "../assets/amazon.jpg";
import { Link } from "react-router-dom";
import Pop from "./Pop";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
import { useNavigate } from "react-router-dom";

const Find = () => {
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginaJobs] = useState([]);

  const [error, setError] = useState("");

  const searchValue = useRef("");
  const filterValue = useRef("");

  const [filterReset, setFilterReset] = useState(0);
  const [searchReset, setSearchReset] = useState(0);
  const navigate = useNavigate();
  const result = [];
  const filterOption = [];

  const reset = () => {
    setJobs(originalJobs);
  };

  const filter = (e) => {
    if (e.target.value !== "false") {
      const filteredJob = jobs.filter((value) => {
        if (value.position === e.target.value) return true;
        return false;
      });
      setJobs(filteredJob);
    } else {
      setJobs(originalJobs);
    }
  };

  const search = (e) => {
    e.preventDefault();
    if (searchValue.current.value === "") {
      setJobs(originalJobs);
    } else {
      const searchedJobs = jobs.filter((value) => {
        if (value.companyName === searchValue.current.value) {
          return true;
        }
        return false;
      });
      setJobs(searchedJobs);
    }
  };

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
    axios
      .get("http://localhost:5000/applicant/jobs")
      .then((response) => {
        if (response.data) {
          setJobs(response.data);
          setOriginaJobs(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  originalJobs.forEach((currentValue, index, arr) => {
    filterOption.push(
      <option onClick={filter} value={currentValue.position}>
        {currentValue.position}
      </option>
    );
  });

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
                placeholder="Company Name"
                ref={searchValue}
              />
              <button onClick={search} className="search_button">
                Search
              </button>
            </div>
          </div>
          <div className="filter-box">
            <div className="filter-dropdown">
              <select
                className="filter-select"
                id="job-function"
                name="job-function"
                // on={filter}
                // ref={filterValue}
                // value={null}
                // defaultValue={"choose the position"}
              >
                <option value={false}>chose the Position</option>
                {filterOption}
              </select>
            </div>

            <button onClick={reset} className="search_button">
              reset
            </button>
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
