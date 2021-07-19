import { BOOKING_COURSE } from "../types/BookingCourseType";

const initialState = {
  booking: [],
};

const BookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_COURSE: {
      return { ...state, booking: action.data };
    }
    default: {
      return state;
    }
  }
};
export default BookingReducer;
