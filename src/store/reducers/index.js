import { combineReducers } from 'redux';
import { default as projectsReducer } from './projectsReducer';
import { default as blogReducer } from './blogReducer';
import { default as contactReducer } from './contactReducer';

export default combineReducers({
  projects: projectsReducer,
  blog: blogReducer,
  contact: contactReducer,
});