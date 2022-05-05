import React, { useEffect, useState } from "react";
import "./Table.css";
import Data from "../../TableData/Data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowDown,
  faArrowsUpDown,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import allRight from "../../../Assests/green.png";
import inProgress from "../../../Assests/orange.png";
import outOfStock from "../../../Assests/red.png";

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(Data);
  }, []);

  return (
    <div className="table-section">
      <div className="inventory-border-bottom">
        <h4 className="inventory">Inventory</h4>
      </div>

      <div className="Table">
        {/* Table search header */}
        <div className="display-none table-margin">
          <form className="table-input d-flex">
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

        {/* Main table */}
        <div className="table-responsive col-sm-12">
          <table className="table table-borderless">
            <thead className="tableHeading">
              <tr className="table-header">
                <th className="CheckBox display-hide-for-mobile">
                  <input className="CheckBox" type="checkbox" name="" id="" />
                </th>
                <th className="display-hide-for-mobile" scope="col">
                  Date Updated
                  <span>
                    <FontAwesomeIcon
                      className="table-header-icon"
                      icon={faArrowDown}
                    />
                  </span>
                </th>
                <th className="" scope="col">
                  Title
                  <span>
                    <FontAwesomeIcon
                      className="table-header-icon"
                      icon={faArrowsUpDown}
                    />
                  </span>
                </th>
                <th className="display-hide-for-tablet" scope="col">
                  Details
                </th>
                <th className="" scope="col">
                  Status
                </th>
                <th className="" scope="col">
                  Quantity
                </th>
                <th className="display-hide-for-tablet" scope="col">
                  Unit Price
                </th>
                <th className="" scope="col">
                  Amount
                  <span>
                    <FontAwesomeIcon
                      className="table-header-icon"
                      icon={faArrowsUpDown}
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr className="table-data-row">
                  <td className="display-hide-for-mobile">
                    <input className="CheckBoX" type="checkbox" name="" id="" />
                  </td>
                  <td className="display-hide-for-mobile">
                    {data.dateUpdated}
                  </td>
                  <td>${data.title}</td>
                  <td className="display-hide-for-tablet">
                    {data.details ? <p>{data.details}</p> : <p>_</p>}
                  </td>
                  <td>
                    <span className="display-hide-for-mobile">
                      {data.status}
                    </span>
                    {data.status === "Alright" && (
                      <img className="status" src={allRight} alt="" />
                    )}
                    {data.status === "In Progress" && (
                      <img className="status" src={inProgress} alt="" />
                    )}
                    {data.status === "Out of Stock" && (
                      <img className="status" src={outOfStock} alt="" />
                    )}
                  </td>
                  <td>{data.Quantity}</td>
                  <td className="display-hide-for-tablet">{data.unitePrice}</td>
                  <td>{data.Amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        {/* right-side-dropdown */}
        <div className="d-md-flex justify-content-between table-footer">
          <div className="">
            <div class="dropdown">
              <button
                class="dropdown-toggle left-dropDown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                10 Items per page
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    5 Items per page
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    15 Items per page
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    20 Items per page
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* right-side-dropdown */}
          <div className="d-flex">
            <div class="dropdown ">
              <button
                class="dropdown-toggle right-dropDown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Page 1 of 5
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Page 2 of 10
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Page 3 of 15
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Page 4 of 20
                  </a>
                </li>
              </ul>
            </div>

            {/*Bottom pagination */}
            <div>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item pagination-item">
                    <a class="page-link" href="#">
                      <FontAwesomeIcon
                        className="pagination-icon"
                        icon={faAngleLeft}
                      />
                    </a>
                  </li>
                  <li class="page-item pagination-item">
                    <a class="page-link" href="#">
                      <FontAwesomeIcon
                        className="pagination-icon"
                        icon={faAngleRight}
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
