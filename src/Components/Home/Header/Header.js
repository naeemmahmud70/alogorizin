import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../../Assests/Ellipse 1.png";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between sticky-top t-0 bg-light">
      <div className="d-flex">
        <div className="d-flex starbucks-div">
          <p className="startbucks">Starbucks</p>
          <FontAwesomeIcon className="mx-2" icon={faSortDown} />
        </div>

        <div className="display-none">
          <form className="header-input d-flex">
            <span>
              <FontAwesomeIcon id="search-icon" icon={faSearch} />
            </span>
            <input
              class="form-control border-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </form>
        </div>
      </div>

      <div className="d-flex header-right-icons-div">
        <span>
          <FontAwesomeIcon id="bell-icon" icon={faBell} />
        </span>
        <div>
          <img id="john-img" src={image} alt="" />
        </div>
        <div className="d-flex john">
          <p className="startbucks">John Doe</p>
          <FontAwesomeIcon className="mx-2" icon={faSortDown} />
        </div>
      </div>
    </div>
  );
};

export default Header;
