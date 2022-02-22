import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  newroot: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 500,
    },
  },
}));

export default function TextFieldSizes() {
  const classes = useStyles();
  
  return (
    <div className="containerclass" style={{ marginLeft: "22%" }}>
      <form className={classes.newroot} noValidate autoComplete="off">
        <h3 className="mx-3">Add HiveUser</h3>
        <div>
          <TextField
            label="hive name"
            id="outlined-size-normal"
            placeholder="hive name"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="hive owner"
            id="outlined-size-normal"
            placeholder="hive owner"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="number of emp"
            id="outlined-size-normal"
            placeholder="number of emp"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="tagline"
            id="outlined-size-normal"
            placeholder="tagline"
            variant="outlined"
          />
        </div>
        <Button className="mx-2 my-2" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
