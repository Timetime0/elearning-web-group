import { call, put, takeLatest } from "redux-saga/effects";
import { SighUpServices } from "../../services/SigupServices";
import { SIGN_UP, SIGN_UP_SAGA } from "../types/SignUpType";

function* getSignUpApi(action) {
	try {
		const res = yield call(() => SighUpServices(action.user));
		console.log(res);

		yield put({
			type: SIGN_UP,
			data: res.data,
		})
	} catch (e) {
		console.log(e);
	}
}

export function* followGetSignUpAction(){
	yield takeLatest(SIGN_UP_SAGA, getSignUpApi)
}

