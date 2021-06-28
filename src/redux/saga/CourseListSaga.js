import {call,put,takeLatest} from 'redux-saga/effects';
import { ListCourseServices } from '../../services/CourseList';
import { COURSE_LIST_SERVICES, COURSE_LIST_SERVICES_SAGA } from '../types/CourseListType';

function* getCourseListApi(){
	try{
		const res = yield call(() => ListCourseServices());
		yield put({
			type: COURSE_LIST_SERVICES,
			data: res.data,
		});
	}catch(e){
		console.log(e);
	}
}

export function* followGetCourseListApiAction(){
	yield takeLatest(COURSE_LIST_SERVICES_SAGA,getCourseListApi);
}