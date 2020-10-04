import { FETCH_LAUNCH_PROGRAMS } from '../actions/type';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LAUNCH_PROGRAMS:
      return action.payload.filteredPrograms;

    default:
      return state;
  }
};
