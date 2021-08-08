import React, { useState } from "react";
import { MemoryRouter, Route } from "react-router";
import { Link, useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
function PageOffset() {
  const history = useHistory();
  const [page, setPage] = useState();
  const handleChangPage = (page) => {
    setPage(page);
    history.push(`/course-list/${page}`);
    console.log(page);
  };
  return (
    <div className="post-pagination">
      <MemoryRouter initialEntries={["/inbox"]} initialIndex={1}>
        <Route>
          {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get("page") || "1", 10);
            return (
              <Pagination
                page={page}
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                    {...item}
                  />
                )}
                onChange={() => handleChangPage(page)}
              />
            );
          }}
        </Route>
      </MemoryRouter>
    </div>
  );
}

export default PageOffset;
