import React, { useState } from "react";
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
import CoureseDataTable from "../../DataTable/CourseData/CoureseDataTable";
import FromAddCourse from "./FormAddCourse";
import { useDispatch } from "react-redux";
import { DELETE_COURSE_ADMIN_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";
import { useHistory } from "react-router-dom";
import FormEditCourse from "./FormEditCourse";
const styles = (theme) => ({
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
  contentWrapper: {
    margin: "40px 16px",
  },
  editCourse: {
    backgroundColor: "green",
    margin: "0 8px",
  },
  View: {
    backgroundColor: "#9f890e",
    margin: "0 8px",
  },
});

function ContentCourseList(props) {
  const { classes } = props;
  // show popup edit course
  const [showPopUpEdit, setShowPopUpEdit] = useState(false);
  const handleEditCourse = () => {
    setEdit(newValue);
    if (newValue) {
      setShowPopUpEdit((show) => !show);
    }
  };
  // Show popup add Course
  const [showPopUp, setShowPopUp] = useState(false);
  const btnAddCourse = () => {
    setShowPopUp((prev) => !prev);
  };

  // Delete course
  const dispatch = useDispatch();
  const [edit, setEdit] = useState("");

  const handleDeleteCourse = () => {
    if (newValue) {
      dispatch({
        type: DELETE_COURSE_ADMIN_SAGA,
        maKhoaHoc: newValue,
      });
    }
  };

  const history = useHistory();
  let newValue = "";

  const onDataMaKhoaHoc = (arr) => {
    newValue = arr;
  };

  const handlelView = () => {
    if (newValue) {
      history.push(`/admin/user-management/${newValue}`);
    }
  };

  // Search Data
  const [search, setSearch] = useState("");
  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
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
                <SearchIcon
                  className={classes.block}
                  color="inherit"
                  onChange={(e) => handlerSearch(e)}
                />
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
                  className={classes.View}
                  onClick={handlelView}
                >
                  View
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.editCourse}
                  onClick={handleEditCourse}
                >
                  Edit Course
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.addUser}
                  onClick={btnAddCourse}
                >
                  Add Course
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.dellUser}
                  onClick={handleDeleteCourse}
                >
                  Delete Course
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
            <CoureseDataTable
              onDataMaKhoaHoc={onDataMaKhoaHoc}
              search={search}
            />
          </Typography>
        </div>
      </Paper>
      <FromAddCourse showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      <FormEditCourse
        showPopUpEdit={showPopUpEdit}
        setShowPopUpEdit={setShowPopUpEdit}
        onEdit={edit}
      />
    </div>
  );
}

ContentCourseList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentCourseList);
