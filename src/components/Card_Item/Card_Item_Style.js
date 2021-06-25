import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',

    height: "auto",
    textAlign: 'center',
    position: 'relative',
    '&:hover': {
      boxShadow: '0px 0px 10px 1px rgb(233 30 99 / 60%)',
      "& $card_button": {
        opacity: 1,
      },
      "& $bg": {
        background: 'radial-gradient(rgb(233 30 99 / 60%), transparent)',
      }
    },
    animation: `$myEffect 1500ms ${theme.transitions.easing.easeInOut}`

  },

  bg: {
    width: '100%',
  },


  media: {
    width: "100%",
    height: "150px",
  },
  card_button: {
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    transition: 'all 0.3s ease-in',
    '& Button': {
      padding: '10px 10px',
    }
  },

  nameCourse: {
    '@media (max-width: 780px)': {
      fontSize: '17px'
    }
  },
  nameDetail: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },


  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      // transform: "translateY(-200%)"
    },
    "100%": {
      opacity: 1,
      // transform: "translateY(0)"
    }
  },

}));
