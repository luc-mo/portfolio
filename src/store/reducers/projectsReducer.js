import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from 'store/actions';

const initialState = {
  projects: [],
  loading: false,
  error: null,
}

export default function projectsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PROJECTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, loading: false, projects: action.payload.projects };
    case FETCH_PROJECTS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}