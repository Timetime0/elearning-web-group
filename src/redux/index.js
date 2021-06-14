import createMiddleWareSaga from "redux-saga";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import rootSaga from "./saga/index";
import CourseReducer from './reducers/CourseReducer'

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
  CourseReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleWareSaga))
);

middleWareSaga.run(rootSaga);

export default store;
