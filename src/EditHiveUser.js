import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./index.css";
import { dummyDataItems } from "./components/Data";
import { useNavigate, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  newroot: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 500,
    },
  },
}));

export default function TextFieldSizes(props) {
  //console.log(props.editHive);
  const { id } = useParams();
  const navigate = useNavigate();
  const index = dummyDataItems.findIndex((item) => item.id === Number(id));
  const classes = useStyles();
  const [dataSets, dataSetUpdate] = useState(dummyDataItems[index]);

  const cancelUpdate = () => {
    console.log("cancel update!!!");
    navigate("/hive");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dataSetUpdate({ ...dataSets, [name]: value });
  };

  const successfullyUpdate = (e) => {
    e.preventDefault();
    console.log("data sets", dataSets);
    navigate("/hive",{state:dataSets});
  };
  return (
    <div className="containerclass" style={{ marginLeft: "22%" }}>
      <form className={classes.newroot} noValidate autoComplete="off">
        <h3 className="mx-3">Edit HiveUser</h3>
        <div>
          <TextField
            label="Name"
            id="hiveName"
            name="hiveName"
            placeholder="hive name"
            variant="outlined"
            value={dataSets.hiveName}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            label="Owner"
            id="hiveOwner"
            name="hiveOwner"
            placeholder="hive owner"
            variant="outlined"
            value={dataSets.hiveOwner}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            label="Num_Emp"
            id="numOfEmp"
            name="numOfEmp"
            placeholder="number of emp"
            variant="outlined"
            value={dataSets.numOfEmp}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            label="Tagline"
            id="tagline"
            name="tagline"
            placeholder="tagline"
            variant="outlined"
            value={dataSets.tagline}
            onChange={handleChange}
          />
        </div>
        <Button
          onClick={successfullyUpdate}
          className="mx-3 my-2"
          variant="contained"
          color="primary"
        >
          Update
        </Button>
        <Button
          onClick={cancelUpdate}
          className="my-2"
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}
