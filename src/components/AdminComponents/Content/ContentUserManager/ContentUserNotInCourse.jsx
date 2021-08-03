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
import { useDispatch } from "react-redux";
import { DELETE_USER_SAGA } from "../../../../redux/types/AdminType/GetUserListType";

import UserNotInCourseDataTable from "../../DataTable/UserManagerDataTable/UserNotInCourseDataTable";

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

function ContentUserNotInCourse(props) {
  const { classes } = props;
  const dispatch = useDispatch();

  // hide button
  const [buttonEdit, setButtonEdit] = useState(false);
  const [isClickEdit, setIsClickEdit] = useState(false);

  const [dataEdit, setDataEdit] = useState({});

  let arrNew = [];

  const handleDeleteUser = () => {
    for (let item in arrNew) {
      dispatch({
        type: DELETE_USER_SAGA,
        taiKhoan: arrNew[item],
      });
    }
  };

  const onDeleteChildToParent = (arr) => {
    arrNew = arr;
  };

  const handleEditUser = () => {
    setIsClickEdit((prev) => !prev);
    setShowPopUp((prev) => !prev);
  };

  const onEditChildToParent = (arr) => {
    console.log(arr);
    setDataEdit(arr);
  };

  // Add User

  // Show popup add User
  const [showPopUp, setShowPopUp] = useState(false);
  const btnAddUser = () => {
    setDataEdit(null);
    setShowPopUp((prev) => !prev);
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
                {buttonEdit ? (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.editUser}
                    onClick={handleEditUser}
                  >
                    Edit User
                  </Button>
                ) : null}

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.addUser}
                  onClick={btnAddUser}
                >
                  Add User
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.dellUser}
                  onClick={() => handleDeleteUser()}
                >
                  Delete User
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
            <UserNotInCourseDataTable
              onDelete={onDeleteChildToParent}
              onEdit={onEditChildToParent}
              inHideEditButton={setButtonEdit}
              isDeleteCheckBox={isClickEdit}
            />
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

ContentUserNotInCourse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentUserNotInCourse);
