import { TOOGLE_FILTER } from "./type"
import { spaceXApiCall } from "../services/spacex.service"

export const applyFilters = (currentFilters) => async dispatch => {
    const filteredPrograms = await spaceXApiCall(currentFilters)

    dispatch({
        type: TOOGLE_FILTER,
        payload: { currentFilters, filteredPrograms }
    })
}