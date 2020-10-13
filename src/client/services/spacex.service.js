import axios from 'axios';
export const spaceXApiCall = async (filters = {}) => {
    let url = `https://api.spacexdata.com/v3/launches?limit=100`;
  
    for (const filterKey in filters) {
      url += `&${filterKey}=${filters[filterKey]}`
    }
  
    const res = await axios.get(url)
    return res.data
  }