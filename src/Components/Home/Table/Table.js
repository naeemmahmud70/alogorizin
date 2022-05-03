import React, { useEffect, useState } from "react";
import "./Table.css";
import Data from "../../TableData/Data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

        <div>
          <h1>This is table {tableData.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default Table;
