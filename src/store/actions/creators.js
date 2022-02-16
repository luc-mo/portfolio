import {
  FETCH_PROJECTS_REQUEST,
  FETCH_ENTRIES_REQUEST,
  CONTACT_REQUEST,
  SET_EMAIL,
} from 'store/actions/types';

export const fetchProjects = () => ({ type: FETCH_PROJECTS_REQUEST });

export const fetchEntries = () => ({ type: FETCH_ENTRIES_REQUEST });

export const sendEmail = email => ({ type: CONTACT_REQUEST, payload: { ...email }});

export const setEmail = email => ({ type: SET_EMAIL, payload: { ...email }});