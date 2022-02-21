import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./index.css";
import { dummyDataItems } from "./components/Data";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  newroot: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 500,
    },
  },
}));

export default function TextFieldSizes() {
  const { id } = useParams();
  const index = dummyDataItems.findIndex((item) => item.id === Number(id));
  const classes = useStyles();
  const [dataSets, dataSetUpdate] = useState(dummyDataItems[index]);

  return (
    <div className="containerclass" style={{marginLeft:"22%"}}>
      <form className={classes.newroot} noValidate autoComplete="off">
        <h3 className="mx-3">Edit HiveUser</h3>
        <div>
          <TextField
            label="Name"
            id="outlined-size-normal"
            placeholder="hive name"
            variant="outlined"
            value={dataSets.hiveName}
          />
        </div>
        <div>
          <TextField
            label="Owner"
            id="outlined-size-normal"
            placeholder="owner name"
            variant="outlined"
            value={dataSets.hiveOwner}
          />
        </div>
        <div>
          <TextField
            label="Num_Emp"
            id="outlined-size-normal"
            placeholder="number of emp"
            variant="outlined"
            value={dataSets.numOfEmp}
          />
        </div>
        <div>
          <TextField
            label="Tagline"
            id="outlined-size-normal"
            placeholder="Tagline"
            variant="outlined"
            value={dataSets.tagline}
          />
        </div>
        <Button className="mx-3 my-2" variant="contained" color="primary">
          Update
        </Button>
        <Button className="my-2" variant="contained" color="primary">
          Cancel
        </Button>
      </form>
    </div>
  );
}
