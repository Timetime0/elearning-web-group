import { call, put, takeLatest } from "redux-saga/effects"
import { GetCourseFromListService } from "../../services/GetCourseFromListServices"
import { GET_COURSE_FROM_LIST_TYPE, GET_COURSE_FROM_LIST_TYPE_SAGA } from "../types/GetCourseFromListType";

function* getCourseFromListApi(action){
	try{
		const res = yield call(() =>GetCourseFromListService(action.data));
		yield put({
			type: GET_COURSE_FROM_LIST_TYPE,
			data: res.data,
		})
	}catch(e){
		console.log(e);
	}
}
export function* followGetCourseFromListApiAction(){
	yield takeLatest(GET_COURSE_FROM_LIST_TYPE_SAGA,getCourseFromListApi)
}