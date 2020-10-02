import { FETCH_LAUNCH_PROGRAMS, TOOGLE_FILTER } from '../actions/type';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LAUNCH_PROGRAMS:
      return action.payload;

    case TOOGLE_FILTER:
      return action.payload.filteredPrograms

    default:
      return state;
  }
};
