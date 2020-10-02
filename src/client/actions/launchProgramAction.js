import { FETCH_LAUNCH_PROGRAMS } from "./type"
import { spaceXApiCall } from "../services/spacex.service"

export const fetchLaunchPrograms = () => async dispatch => {
  const data = await spaceXApiCall()

  dispatch({
    type: FETCH_LAUNCH_PROGRAMS,
    payload: data
  })
}
