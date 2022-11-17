import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
} from "../constants/roomConstants";

//All Room Reducer

export const allRoomsReducers = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomCount,
        roomsPerPage: action.payload.resPerPage,
        filtereRoomsCount: action.payload.filtereRoomsCount,
        room: action.payload.room,
      };
    case ALL_ROOMS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
