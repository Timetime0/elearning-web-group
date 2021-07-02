import {call, put, takeLatest} from 'redux-saga/effects';
import { LoginService } from '../../services/LoginServices';
import { LOGIN_SERVICE, LOGIN_SERVICE_SAGA } from '../types/LoginType';

function* getLoginApi(){
	try{
		const res = yield call(() =>LoginService());
		yield put ({
			type: LOGIN_SERVICE,
			data: res.data,
		})
	}catch(e){
		console.log(e);
	}
}
export function* followGetLoginApiAction(){
	yield takeLatest(LOGIN_SERVICE_SAGA,getLoginApi);
}