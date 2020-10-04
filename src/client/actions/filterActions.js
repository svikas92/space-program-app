import { FETCH_LAUNCH_PROGRAMS } from "./type"
import { spaceXApiCall } from "../services/spacex.service"

export const applyFilters = (currentFilters) => async dispatch => {
    const filteredPrograms = await spaceXApiCall(currentFilters)

    dispatch({
        type: FETCH_LAUNCH_PROGRAMS,
        payload: { currentFilters, filteredPrograms }
    })
}