import { useState } from "react";
import "../../style/AddJob.css";
import { FaPlus } from "react-icons/fa";
export default function Pop() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <button className="icon-button" onClick={handleClick}>
        <FaPlus></FaPlus> &nbsp;Add Job Offer
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form>
          <div className="add-job-Contianer" id="job">
            <div className="title">
              <h2>Add job offer</h2>
              <hr className="add-job-hr"></hr>
            </div>

            <div className="Job-content">
              <label>
                {" "}
                Job title<input type="text"></input>
              </label>

              <label> Description</label>
              <textarea type="text-area" rows="4" cols="50"></textarea>

              <label>
                {" "}
                Salary<input type="text"></input>
              </label>
              <label>
                {" "}
                Max Candidtate Number<input type="text"></input>
              </label>
              <label>
                {" "}
                Creation Date<input type="text"></input>
              </label>
              <button className="post-button">Post now!</button>
            </div>
          </div>
        </form>
      ) : null}

      {isShown ? <></> : null}
    </div>
  );
}

function Box() {
  return (
    <div>
      <h2>Box</h2>
    </div>
  );
}
