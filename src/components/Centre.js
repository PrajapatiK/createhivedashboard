import React from "react";
import { dummyDataItems } from "./Data";
import { Link } from "react-router-dom";

const Centre = () => {
  return (
    <>
      <Link className="btn btn-outline-primary my-2 mx-2" to="/users/newhive">
        Add user
      </Link>
      <div className="row" style={{overFlow: "auto"}}>
        {dummyDataItems.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mx-2 my-2" style={{ width: "18rem" }}>
              <ul className="card-body">
                <li className="list-group-item">
                  <strong>HiveName: </strong>
                  {item.hiveName}
                </li>
                <li className="list-group-item">
                  <strong>HiveOwner: </strong>
                  {item.hiveOwner}
                </li>
                <li className="list-group-item">
                  <strong>No.Emp: </strong>
                  {item.numOfEmp}
                </li>
                <li className="list-group-item">
                  <strong>Tagline: </strong>
                  {item.tagline}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Centre;
