import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import CourseListComponent from '../../../components/ClientComponent/CourseListComponent/CourseListComponent'
import { GET_COURSE_FROM_LIST_TYPE_SAGA } from '../../../redux/types/GetCourseFromListType';

function CourseFromList(props) {
	
	let {maDanhMuc} = useParams();
	let list = useSelector((state) => state.CourseReducer.getCourse);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: GET_COURSE_FROM_LIST_TYPE_SAGA,
			data: maDanhMuc,
		})
	},[dispatch])

	return (
		<div>
      <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              <a href="#">Courses</a>
            </li>
          </ul>
          <h2 className="inner-banner__title">Courses</h2>
        </div>
      </section>
      <CourseListComponent />
    </div>
	)
}

export default CourseFromList
