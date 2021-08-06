import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useDispatch } from "react-redux";
import { REGISTER_COURSE_SAGA } from "../../../../redux/types/AdminType/RegisterCourse";
import { useParams } from "react-router-dom";
import CourseManagerDataTable from "../../DataTable/CourseManagerDataTable/CourseManagerDataTable";

const styles = (theme) => ({
  container: {
    position: "relative !important",
  },
  paper: {
    maxWidth: 1920,
    margin: "auto",
    overflow: "hidden",
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: "block",
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  dellUser: {
    backgroundColor: "red",
  },
  editUser: {
    backgroundColor: "green",
    margin: "0 8px",
  },
  contentWrapper: {
    margin: "40px 16px",
  },

  center_popup: {
    position: "absolute",
    width: "63%",
    top: "50%",
    right: "50%",
    transform: "translate(50%,-50%)",
    backgroundColor: "red",
  },
});

function ContentCourseManager(props) {
  const { classes } = props;
  const dispatch = useDispatch();

  const { taiKhoan } = useParams();
  let maKhoaHoc = {};

  const handleRegisterCourse = () => {
    // for (let item in maKhoaHoc) {
    dispatch({
      type: REGISTER_COURSE_SAGA,
      data: { maKhoaHoc, taiKhoan },
    });
    // }
    console.log(maKhoaHoc);
  };

  const onUnRegister = (arr) => {
    maKhoaHoc = arr;
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <AppBar
          className={classes.searchBar}
          position="static"
          color="default"
          elevation={0}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Search by email address, phone number, or user UID"
                  InputProps={{
                    disableUnderline: true,
                    className: classes.searchInput,
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.addUser}
                  onClick={handleRegisterCourse}
                >
                  Register Course
                </Button>

                <Tooltip title="Reload">
                  <IconButton>
                    <RefreshIcon className={classes.block} color="inherit" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className={classes.contentWrapper}>
          <Typography color="textSecondary" align="center">
            <CourseManagerDataTable onUnRegister={onUnRegister} />
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

ContentCourseManager.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentCourseManager);
