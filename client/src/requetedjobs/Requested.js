// import React from 'react'
import "./requested.css";
import { Header } from "../shared/Header";
import {Footer} from '../Components/shared/Footer'
// import { useState } from 'react'
// import { FaDots } from 'react-icons/fa';
// import Icon from '../assets/images/verticalDots.png';
import "./requested.css";
import Tables from "./Tables";

const Requested = () => {
  // const data = React.useMemo( (Fake))

  return (
    <>
      <Header></Header>
      {/* <div className="div-table"> */}
      <div className="request-body">
      <Tables></Tables>
      {/* </div> */}
      <div className="div-footer">
      <Footer></Footer>
      </div>
      </div>
    </>
  );
};

export default Requested;
