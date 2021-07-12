const styles = (theme) => ({
  nav: {
    backgroundColor: "white",
    margin: "o auto",
  },
  nav_Content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    margin: "0 35px",
  },
  icon_Item: {
    color: "#81868a",
    padding: "0 20px",
    fontSize: "18px",
  },
  title: {
    color: "#81868a",
    margin: "0px 30px",
    fontSize: "14px",
  },
  menuButton: {
    color: "#f16101",
  },
  navActive: {
    color: "#f16101",
  },
  logoNav: {
    width: "20px",
    height: "65px",
  },
  buttonLogin: {
    background: "#00e676",
    color: "white",
    border: "1px solid #00e676",
    padding: "5px 25px",
    margin: "5px 10px",
  },
  buttonSignUp: {
    background: "white",
    color: "#00e676",
    border: "1px solid #00e676",
    margin: "5px 10px",
  },
  paddingButton: {
    padding: "4px 5px",
  },
  headerLink: {
    width: "30%",
  },
});

export default styles;
