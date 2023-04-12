import { Search } from "../Home/Search";
import "../../style/Dashboard.css";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import DeleteEmployee from '../Admin/DeleteEmployee'
import Table from "../Table";
import Image from "../../assets/images/t2.avif";
import { Footer } from "../shared/Footer";
import NotificationButton from "../NotificationButton";
import DeleteJob from '../Admin/DeleteJob'
import AddJob from "./AddJob";
import AddEmployee from "../Admin/AddmEmployee";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
export const Dashboard = () => {
 
  
 
  return (
    <>
      <nav className="admin-nav">
        <div className="main-container">
          <div className="title-container">
            <h4>Admin Dashboard</h4>
          </div>
          <div className="mini-control">
            <NotificationButton></NotificationButton>
          </div>
        </div>
      </nav>
      <div
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 610,
          marginBottom: -50,
        }}
      ></div>
      <div className="sub-mini-control">
        {/* <Search></Search> */}
        <AddJob href="#">
          <FaPlus></FaPlus>
        </AddJob>
        <DeleteJob>
        <FaPlus></FaPlus>
        </DeleteJob>
        <AddEmployee href="#">
          <FaPlus></FaPlus>
        </AddEmployee>
        <DeleteEmployee>
        <FaPlus></FaPlus>
        </DeleteEmployee>

      </div>

      <Table></Table>

      <Footer></Footer>

      {/* <div className='table-content'>
        <div id="data-table">
        <table >
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Position</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody id="html-data-table">
                <tr>
                    <td>
                        10
                    </td>
                    <td>
                        SALAH
                    </td>
                    <td>designer</td>
                    <td>pending</td>
                </tr>
            </tbody>

            
        
        </table> 
        <Table></Table>
    </div>
        </div> */}
    </>
  );
};
