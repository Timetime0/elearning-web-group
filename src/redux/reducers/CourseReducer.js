import { GET_DATA_COURSE } from "../types/courseType"

const initialState  = {
    cousre : [],
}


const CourseReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_DATA_COURSE:{
            return {...state,cousre:action.data }
        }
        



        default: {return state}
    }
}

export default CourseReducer
