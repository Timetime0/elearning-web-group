import { call, put, takeLatest } from "redux-saga/effects";
import { PageOffsetServices } from "../../services/PageOffsetServices";
import { PAGE_OFFSET, PAGE_OFFSET_SAGA } from "../types/PageOffset";

function* getPageOffsetApi(action) {
  try {
    let result = yield call(() => PageOffsetServices(action.number));
    yield put({
      type: PAGE_OFFSET,
      data: result.data,
    });
  } catch (err) {
    console.log(err.response);
  }
}

export function* followGetPageOffsetApi() {
  yield takeLatest(PAGE_OFFSET_SAGA, getPageOffsetApi);
}
