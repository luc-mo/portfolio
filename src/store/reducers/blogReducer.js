import {
  FETCH_ENTRIES_REQUEST,
  FETCH_ENTRIES_SUCCESS,
  FETCH_ENTRIES_FAILURE,
} from 'store/actions';

const initialState = {
  entries: [],
  loading: false,
  error: null,
}

export default function entriesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_ENTRIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_ENTRIES_SUCCESS:
      return { ...state, loading: false, entries: action.payload.entries };
    case FETCH_ENTRIES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}