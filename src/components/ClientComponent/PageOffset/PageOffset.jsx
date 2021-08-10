import React, { useEffect } from "react";
import { MemoryRouter, Route } from "react-router";
import { Link, useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_COURSE_SAGA } from "../../../redux/types/courseType";
function PageOffset() {
  const history = useHistory();
  const dispatch = useDispatch();
  let course = useSelector((state) => state.CourseReducer.course);

  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);

  return (
    <div className="post-pagination">
      <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
        <Route>
          {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get("page") || "1", 10);
            return (
              <Pagination
                page={page}
                count={Math.ceil(course?.length / 9)}
                renderItem={(item) => {
                  history.push(`/course-list/${item.page - 1}`);
                  return (
                    <PaginationItem
                      component={Link}
                      to={`/inbox${
                        item.page === 1 ? "" : `?page=${item.page}`
                      }`}
                      {...item}
                    />
                  );
                }}
              />
            );
          }}
        </Route>
      </MemoryRouter>
    </div>
  );
}

export default PageOffset;
