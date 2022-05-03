import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="row Reverse-column bg-gray-color">
        <div className="col-lg-2 col-md-1 sidebar-bottom-sticky">
          <Sidebar></Sidebar>
        </div>
        <div className="col-lg-10 col-md-11">
          <Table></Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
