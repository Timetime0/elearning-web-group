import React from "react";
import { useSelector } from "react-redux";

function Loading() {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  if (isLoading) {
    return (
      <div className="preloader">
        <span />
      </div>
    );
  } else {
    return "";
  }
}

export default Loading;
