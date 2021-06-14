import React, { useEffect } from "react";
import CardItem from "../Card_Item/CardItem";
import { useDispatch } from "react-redux";
import { GET_DATA_COURSE_SAGA } from "../../redux/types/courseType";

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);

  return (
    <div>
      <CardItem></CardItem>
    </div>
  );
}

export default Categories;
