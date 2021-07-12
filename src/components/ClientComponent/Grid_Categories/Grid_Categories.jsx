import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_COURSE_SAGA } from "../../../redux/types/courseType";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardItem from "../../Card_Item/CardItem";

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(1),
    // backgroundColor:theme.palette.secondary.main,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },

}));


export default function Grid_Category() {
  const classes = useStyles();
  let course = useSelector((state) => state.CourseReducer.course);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect')
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);

  return (
      <Grid container spacing={1} >
        {course.map((course, index) => {
          return (
            <Grid item lg={2} md={4} xs={6} key={index}>
              <Paper className={classes.paper}>
                <CardItem course={course} key={index}></CardItem>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
  );
}
