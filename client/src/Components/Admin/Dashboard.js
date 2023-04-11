import "../../style/Dashboard.css";
import { FaPlus } from "react-icons/fa";
import Table from "../Table";
import Image from "../../assets/images/t2.avif";
import { Footer } from "../shared/Footer";
import Bu, { Button } from "../Home/LgnButton";
import NotificationButton from "../NotificationButton";
import AddJob from "./AddJob";
import AddEmployee from "../Admin/AddmEmployee";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const win = window.sessionStorage;
    if (!win.getItem("auth")) {
      if (win.getItem("type") !== "admin") navigate("/");
      navigate("/login");
    }
  }, []);

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
          <Button></Button>
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

        <AddEmployee href="#">
          <FaPlus></FaPlus>
        </AddEmployee>
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
