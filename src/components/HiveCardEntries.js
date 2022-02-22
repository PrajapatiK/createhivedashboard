import React, { useEffect, useState } from "react";
import { dummyDataItems } from "./Data";
import { Link } from "react-router-dom";
import "./index.css";
import HiveCard from "./HiveCard";
import { useLocation } from "react-router-dom";

const HiveCardEntries = () => {
  const [dataItems, setDataItems] = useState(dummyDataItems);

  const deleteHive = (id) => {
    console.log("delete hive", id);
    setDataItems(dataItems.filter((e) => e.id !== id));
  };
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const index = dataItems.findIndex((item) => item.id === location.state.id);
    console.log(index);
    if (index !== -1) {
      const setManyItems = [...dataItems];
      let setOneItem = { ...setManyItems[index] };
      setOneItem = location.state;
      setManyItems[index] = setOneItem;
      setDataItems(setManyItems);
    }
  }, [location]);

  return (
    <div className="show-data" style={{ transitionDelay: "0.1s" }}>
      <Link className="btn btn-outline-primary my-2 mx-2" to="/users/newhive">
        Add Hive
      </Link>
      <div>
        {dataItems.length === 0 ? (
          <h4>No Entry for display</h4>
        ) : (
          <div className="row" style={{ overFlow: "auto" }}>
            {dataItems.map((item) => (
              <div className="col-md-4" key={item.id}>
                <HiveCard item={item} deleteHive={deleteHive} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HiveCardEntries;
