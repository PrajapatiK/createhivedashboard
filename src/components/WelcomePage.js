import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  rootStyle: {
    width: '100%',
    backgroundColor: 'blue'
  },
  root: {
    minWidth: 275,
    maxWidth: 300,
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

const SimpleCard = (props) => {
  const classes = useStyles();
  const item = props.item
  return (
    <div className="row">
      <Card className={`${classes.root} col-md-4 mx-4`} variant="outlined">
        <CardContent>
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="strong" component="h2">
            {'item.hiveName'}
          </Typography>
          <Typography variant="h6" component="h2">
            {'item.hiveOwner'}
          </Typography>
          <Typography variant="h6" component="h2">
            {'item.numOfEmp'}
          </Typography>
          <Typography variant="h6" component="h2">
            {'item.tagline'} {'item.hiveName'}
          </Typography>
          {/* <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent >
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card >
    </div >
  );
}

export default SimpleCard;