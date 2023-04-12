import '../../style/Search.css';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Search = ()=>{
  const navigate = useNavigate();
  const win = window.sessionStorage;
  if (win.getItem("auth")) {
    navigate("/");
  }
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginaJobs] = useState([]);
  const searchValue = useRef("");
  const filterValue = useRef("");
  var x=0;
  const searchResult = (e) => {
    e.preventDefault();
    if (searchValue.current.value === "") {
      alert('please enter a value')
    } else {
      // console.log(searchValue.current.value)
      x++;
      navigate('/find',{state : {id : x, data: searchValue.current.value}})
      //  window.open('http://localhost:3000/find','_blank')
      const searchedJobs = jobs.filter((value) => {
        if (value.companyName === searchValue.current.value) {
          return true;
        }
        return false;
      });
      setJobs(searchedJobs);
    }
  };
  
    return(
    <>
  <form className="example" action="">
  <input  className="main-search"type="text" placeholder="Search for a job now!" name="search"ref={searchValue}/>
  <button onClick={searchResult} type="submit"><i className=''></i>
  <FaSearch></FaSearch>
  </button>
</form>
    
    </>


    );
}