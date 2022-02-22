import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import "./index.css";

const useStyles = makeStyles({
  rootStyle: {
    width: '100%',
    // backgroundColor: 'blue'
  },
  root: {
    minWidth: 375,
    maxWidth: 350,
    minHeight: 180,
    // textAlign: 'center'
    // backgroundColor: 'red'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function HiveCard(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const editHiveUser = (id) => {
    console.log("welcome to edit hive user");
    navigate(`/users/edithive/${id}`);
  };
  const deleteHiveUser = (id) => {
    console.log("welcome to delete user");
    props.deleteHive(id);
  };
  const item = props.item;
  return (
    <Card className={`${classes.root} container col-md-4 mx-4 my-4`} variant="outlined">
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
        Word of the Day
      </Typography> */}
        <Typography variant="h6">
          Name: {item.hiveName}
        </Typography>
        <Typography variant="h6">
          Owner: {item.hiveOwner}
        </Typography>
        <Typography variant="h6">
          No. of Emp: {item.numOfEmp}
        </Typography>
        <Typography variant="h6">
          Tag Line: {item.tagline}
        </Typography>
        {/* <Typography variant="body2" component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}
      </CardContent >
      <CardActions>
        <Button size="small" onClick={() => editHiveUser(item.id)}><EditRoundedIcon /></Button>
        <Button size="small" onClick={() => deleteHiveUser(item.id)}><DeleteRoundedIcon /></Button>
      </CardActions>
    </Card >
  );
}

export default HiveCard;
