import { call, takeLatest } from "redux-saga/effects";
import { SighUpServices } from "../../services/SigupServices";
import { SIGN_UP, SIGN_UP_SAGA } from "../types/SignUpType";

function* getSignUpApi(action) {
	try {
		console.log(action.user)
		const res = yield call(() => SighUpServices(action.user));
		console.log(res);

	} catch (error) {
		console.log(error.reponse.data);
	}
}

export function* followGetSignUpAction(){
	yield takeLatest(SIGN_UP_SAGA, getSignUpApi)
}

