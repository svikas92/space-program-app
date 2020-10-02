import { TOOGLE_FILTER } from "../actions/type";

export default (state = {}, action) => {
    switch (action.type) {
        case TOOGLE_FILTER:
            return action.payload.currentFilters

        default:
            return state
    }
}