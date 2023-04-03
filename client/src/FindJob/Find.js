// import React from "react";
// import About from "../Components/about/About";
import "./find.css";
import tesla from "../assets/tesla.jpg";
import amazon from "../assets/amazon.jpg";
import { Link } from "react-router-dom";
import Pop from "./Pop";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

const Find = () => {
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
            <div className="job_card">
              <div className="job_name">
                <img src={amazon} alt="" className="job-profile" />
                <div className="job_detail">
                  <h4>Amazon</h4>
                  <h3>Infrastructure</h3>
                  <p>
                    looking for an experienced UI/UX designer for ongoing
                    project . it will work with an existing SCRUM team for this
                    project
                  </p>
                </div>
              </div>
              {/* <button className='viewButton'><Link to={"/jobdetails"}> view </Link></button> */}
              <Pop></Pop>
              <button className="viewButton">
                <Link> Request </Link>
              </button>
            </div>

            {/* // </Link>  */}

            <div className="job_card">
              <div className="job_name">
                <img className="job-profile" alt="" src={tesla} />
                <div className="job_detail">
                  <h4>Tesla</h4>
                  <h3>Infrastructure</h3>
                  <p>
                    lorem lorem lorem lorem loremlorem lorem lorem loremlorem
                    lorem lorem loremlorem lorem lorem loremlorem lorem lorem
                    loremlorem lorem lorem loremlorem lorem lorem loremlorem
                    lorem lorem loremlorem lorem lorem loremlorem lorem lorem
                    loremlorem lorem lorem loremlorem lorem lorem loremlorem
                    lorem lorem loremlorem lorem lorem loremlorem lorem lorem
                    loremlorem lorem lorem loremlorem lorem lorem loremlorem
                    lorem lorem loremlorem lorem lorem loremlorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem{" "}
                  </p>
                </div>
              </div>

              {/* <button className='viewButton'><Link to={"/jobdetails"}> view </Link></button> */}
              <Pop></Pop>
              <button className="viewButton">
                <Link> Request </Link>
              </button>
            </div>

            <div className="job_card">
              <div className="job_name">
                <img className="job-profile" alt="" src={tesla} />
                <div className="job_detail">
                  <h4>Tesla</h4>
                  <h3>Infrastructure</h3>
                  <p>
                    lorem lorem lorem lorem loremlorem lorem lorem loremlorem
                    lorem lorem loremlorem lorem lorem loremlorem lorem lorem
                    loremlorem lorem lorem loremlorem lorem lorem loremlorem
                    lorem lorem loremlorem lorem lorem loremlorem lorem lorem
                    loremlorem lorem lorem loremlorem lorem lorem loremlorem
                    lorem lorem loremlorem lorem lorem loremlorem lorem lorem
                    loremlorem lorem lorem loremlorem lorem lorem loremlorem
                    lorem lorem loremlorem lorem lorem loremlorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem{" "}
                  </p>
                </div>
              </div>

              {/* <button className='viewButton'><Link to={"/jobdetails"}> view </Link></button> */}
              <Pop></Pop>
              <button className="viewButton">
                <Link> Request </Link>
              </button>
            </div>
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
