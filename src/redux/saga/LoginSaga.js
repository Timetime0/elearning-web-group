import { call, put, takeLatest } from "redux-saga/effects";
import { LoginService } from "../../services/LoginServices";
import { LOGIN_SERVICE, LOGIN_SERVICE_SAGA } from "../types/LoginType";
import Swal from 'sweetalert2'

function* getLoginApi(action) {
  try {
    console.log(action);
    const res = yield call(() => LoginService(action.user));
    console.log(res);
    yield put({
      type: LOGIN_SERVICE,
      data: res.data,
    });
    // popup
    // switch(res.status){
    //   case 200: {
    //     return localStorage.setItem("user", JSON.stringify(res.data));
    //   }
    //   case 500: {
    //      Swal.fire({
    //                 icon: 'error',
    //                 title: 'Tài khoản hoặc mật khẩu không chính xác!',
    //             })
    //   }
    //   default: {
    //     return true;
    //   }
    // }
    if(res.status === 200){
      Swal.fire({
                    icon: 'success',
                    title: 'Đăng nhập thành công',
                })
    }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Tài khoản hoặc mật khẩu không chính xác!',
                })
            }
  } catch (e) {
    console.log(e);
    // popup
  }
}
export function* followGetLoginApiAction() {
  yield takeLatest(LOGIN_SERVICE_SAGA, getLoginApi);
}
