import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { useNavigate } from "react-router-dom";

function HiveCard(props) {
  const navigate = useNavigate();
  const editHiveUser = (id) => {
    console.log("welcome to edit hive user");
    navigate(`/users/edithive/${id}`);
  };
  const deleteHiveUser=(id)=>{
    console.log('welcome to delete user');
    props.deleteHive(id);    
  }
  const item = props.item;
  return (
    <div className="card mx-2 my-2" style={{ width: "18rem" }}>
      <button onClick={()=>deleteHiveUser(item.id)}
        style={{
          border: "none",
          padding: "0px",
          margin: "0px",
          backgroundColor: "white",
          position: "absolute",
          right: "0",
          top: "-4px",
        }}
      >
        <DeleteRoundedIcon />
      </button>
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
      <button
        onClick= {()=>editHiveUser(item.id)}
        to="/users/edithive"
        style={{
          border: "none",
          padding: "0px",
          margin: "0px",
          backgroundColor: "white",
          position: "absolute",
          right: "0",
          top: "19px",
        }}
      >
        <EditRoundedIcon />
      </button>
    </div>
  );
}

export default HiveCard;
