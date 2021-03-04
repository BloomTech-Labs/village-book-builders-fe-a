// Reducer file for Mentor
import {
  FETCH_MENTOR_START,
  FETCH_MENTOR_SUCCESS,
  FETCH_MENTOR_FAILURE,
  FETCH_MENTOR_PROFILE_START,
} from '../actions/actionTypes';

import { debugLog } from '../../utils/debugMode.js';

const initialState = {
  mentorProfile: '',
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  // console.log(
  //   'mentorReducer.js, action type & payload:',
  //   action.type,
  //   action.payload
  // );
  switch (action.type) {
    case FETCH_MENTOR_START:
      debugLog(action.type, action.payload);
      return { ...state, mentorProfile: action.payload };

    case FETCH_MENTOR_SUCCESS:
      debugLog(action.type, action.payload);
      return { ...state, isLoading: false, mentor: action.payload };
    case FETCH_MENTOR_FAILURE:
      debugLog(action.type, action.payload);
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default reducer;
