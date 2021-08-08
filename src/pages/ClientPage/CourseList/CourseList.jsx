import { Fragment } from "react";
import CourseListComponent from "../../../components/ClientComponent/CourseListComponent/CourseListComponent";
import PageOffset from "../../../components/ClientComponent/PageOffset/PageOffset";

function CourseList() {
  return (
      <Fragment>
        <section className="inner-banner">
          <div className="container">
            <ul className="list-unstyled thm-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">
                <a href="/">Courses</a>
              </li>
            </ul>
            <h2 className="inner-banner__title">Courses</h2>
          </div>
        </section>
        <CourseListComponent />
        <PageOffset />
      </Fragment>
  );
}

export default CourseList;
