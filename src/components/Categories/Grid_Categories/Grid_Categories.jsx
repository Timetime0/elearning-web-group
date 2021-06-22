import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardItem from '../../Card_Item/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { GET_DATA_COURSE_SAGA } from '../../../redux/types/courseType';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Grid_Category() {
  const classes = useStyles();
  let course = useSelector((state) => state.CourseReducer.cousre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);

  return (
    <div>
      <Grid container spacing={3}>
	  {course.map((course, index) => {
        return <Grid item xs={3}>
		<Paper className={classes.paper}>
		<CardItem course={course} key={index}></CardItem>
		</Paper>
		</Grid>
	})}
      </Grid>    
      </div>
  );
}