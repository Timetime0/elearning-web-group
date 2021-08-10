import { call, put, takeLatest } from "redux-saga/effects";
import { PageOffsetServices } from "../../services/PageOffsetServices";
import { PAGE_OFFSET, PAGE_OFFSET_SAGA } from "../types/PageOffset";

function* getPageOffsetApi(action) {
  try {
    yield put({
      type: "DISPLAY_LOADING",
    });
    let result = yield call(() => PageOffsetServices(action.number));
    yield put({
      type: PAGE_OFFSET,
      data: result.data,
    });
    yield put({
      type: "HIDE_LOADING",
    });
  } catch (err) {
    console.log(err.response);
  }
}

export function* followGetPageOffsetApi() {
  yield takeLatest(PAGE_OFFSET_SAGA, getPageOffsetApi);
}
