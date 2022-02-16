import {
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
  CONTACT_FAILURE,
  SET_EMAIL
} from 'store/actions';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  loading: false,
  sended: false,
  error: null,
}

export default function contactReducer(state = initialState, action) {
  switch(action.type) {
    case SET_EMAIL:
      return { ...state, ...action.payload };

    case CONTACT_REQUEST:
      return { ...state, sended: false, loading: true };
    case CONTACT_SUCCESS:
      return { ...initialState, sended: true };
    case CONTACT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}