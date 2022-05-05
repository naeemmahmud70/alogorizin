import React from "react";
import "./Sidebar.css";
import home from "../../../Assests/home.png";
import inventory from "../../../Assests/inventory.png";
import documents from "../../../Assests/documents.png";
import setting from "../../../Assests/setting.png";

const Sidebar = () => {
  return (
    <div className="sidebar row">
      <div className="side-tabs">

        <div className="icon-div d-flex">
          <div className="home-icon">
            <img src={home} alt="" />
          </div>
          <div className="tab-name">
            <a href="">Home</a>
          </div>
        </div>

        <div className="icon-div d-flex">
          <div className="inventory-icon">
            <img src={inventory} alt="" />
          </div>
          <div className="tab-name">
            <a href="">Inventory</a>
          </div>
        </div>

        <div className="icon-div d-flex">
          <div className="documents-icon">
            <img src={documents} alt="" />
          </div>
          <div className="tab-name">
            <a href="">Documents</a>
          </div>
        </div>

        <div className="icon-div d-flex">
          <div className="settings-icon">
            <img src={setting} alt="" />
          </div>
          <div className="tab-name">
            <a href="">Settings</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
