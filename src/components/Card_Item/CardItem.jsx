
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Card_Item_Style";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CardItem(props) {
  const classes = useStyles();
  const history = useHistory();
  const { course } = props;

  const detailCourse = () => {
    history.push("/course-detail/" + course.maKhoaHoc);

  };

  // console.log(props.course.maKhoaHoc);
  return (
    <Card className={classes.root}>
      <div className={classes.bg}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.course.hinhAnh} />
          <CardContent>
            <Typography
              className={classes.nameCourse}
              gutterBottom
              variant="h5"
              component="h5"
            >
              {props.course.tenKhoaHoc}
            </Typography>
            <Typography
              className={classes.nameDetail}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.course.moTa}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.card_button}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => {
              detailCourse();
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
