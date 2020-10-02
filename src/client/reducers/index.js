import { combineReducers } from 'redux';
import usersReducer from './launchProgramReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  launchPrograms: usersReducer,
  filters: filterReducer
});
