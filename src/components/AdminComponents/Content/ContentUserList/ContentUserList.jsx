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
import UserDataTable from "../../DataTable/UserData/UserDataTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  DELETE_USER_SAGA,
  GET_USER_LIST_SAGA,
} from "../../../../redux/types/AdminType/GetUserListType";
import FormAdduser from "./FormAdduser";

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

function ContentUserList(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  // Search data
  // const getData = useSelector((state) => state.UserReducer.userList);
  // const [data, setData] = useState([]);

  // const [search, setSearch] = useState("");
  // function searchList(list) {
  //   const columns = list[0] && Object.keys(list[0]);
  //   return list.filter((list) =>
  //     columns.some((columns) => list[columns].toLowerCase().indexOf(search) > 1)
  //   );
  // }

  // delete user
  // useEffect(() => {
  //   dispatch({
  //     type: DELETE_USER_SAGA,
  //   });
  // }, []);
  useEffect(() => {
    dispatch({
      type: GET_USER_LIST_SAGA,
    });
  }, [dispatch]);
  let userList = useSelector((state) => state.UserReducer.userList);

  const handleDeleteUser = () => {
    let list = userList.map((user, index) => {
      return { id: index, ...user };
    });
    console.log(list);
  };

  // Add User

  // Show popup add User
  const [showPopUp, setShowPopUp] = useState(false);
  const btnAddUser = () => {
    setShowPopUp((prev) => !prev);
  };
  // style popup

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
            <UserDataTable />
          </Typography>
        </div>
      </Paper>
      <FormAdduser showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
    </div>
  );
}

ContentUserList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentUserList);
