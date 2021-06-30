import { LOGIN_SERVICE } from "../types/LoginType";

const initialState = {
	loginUser: [],
}
const LoginReducer = (state = initialState, action) => {
	switch(action.type){
		case LOGIN_SERVICE:{
			return {...state, loginUser: action.data}
		}
		default:{
			return state;
		}
			
	}
}
export default LoginReducer;