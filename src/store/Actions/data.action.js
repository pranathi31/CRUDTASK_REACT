import NetworkOps from "../../services/NetworkOps";
import { ServiceEnum } from "../../services/Urls";
export const search=(value,pageNumber,limit) => async (dispatch, getstate) => {
    const res = await NetworkOps.post(`${ServiceEnum.search}?pageNumber=${pageNumber}&serviceProvidersPerPage=${limit}`,value)
    if (res.status === true) {
      dispatch({
        type: 'SEARCH',
        payload: res.data
      })
    }
    return res
  }
  
  export const moving=(value,pageNumber,limit) => async (dispatch, getstate) => {
    const res = await NetworkOps.put(`${ServiceEnum.moving}?pageNumber=${pageNumber}&serviceProvidersPerPage=${limit}`,value)
    if (res.status === true) {
      dispatch({
        type: 'MOVING',
        payload: res.data
      })
    }
    return res
  }

  export const tableget=() => async (dispatch, getstate) => {
    const res = await NetworkOps.get(`${ServiceEnum.get}`)
      dispatch({
        type: 'TABLEGET',
        payload: res
      })
    return res
  }

  export const tabledelete=(id) => async (dispatch, getstate) => {
    const res = await NetworkOps.delete(`${ServiceEnum.delete}/${id}`)
      dispatch({
        type: 'TABLEDELETE',
        payload: res
      })
    return res
  }
 

 