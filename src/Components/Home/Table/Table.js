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

        <div className="table-responsive col-sm-12">
            <table className="table table-borderless table-light table-striped">
                <thead>
                    <tr>
                        <th className="text-secondary text-center" scope="col">Date Updated</th>
                        <th className="text-secondary" scope="col">Title</th>
                        <th className="text-secondary" scope="col">Details</th>
                        <th className="text-secondary" scope="col">Status</th>
                        <th className="text-secondary" scope="col">Quantity</th>
                        <th className="text-secondary" scope="col">Unit Price</th>
                        <th className="text-secondary" scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((data) =>
                            <tr>
                               
                                <td>{data.dateUpdated}</td>
                                <td>${data.title}</td>
                                <td className="td-width">{data.details}</td>
                                <td>{data.status}</td>
                                <td>{data.Quantity}</td>
                                <td>{data.unitePrice}</td>
                                <td>{data.Amount}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        
        </div>

      </div>
    </div>
  );
};

export default Table;
