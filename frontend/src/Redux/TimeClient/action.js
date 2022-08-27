
import axios from "axios";
import { ADD_TIMECLINET_FAILURE, ADD_TIMECLINET_REQUEST, ADD_TIMECLINET_SUCCESS, DELETE_TIMECLINET, DELETE_TIMECLINET_FAILURE, DELETE_TIMECLINET_SUCCESS, GET_CLINET_SUCCESS, GET_TIMECLINET_ERROR, GET_TIMECLINET_REQUEST, GET_TIMECLINET_SUCCESS } from "./actionType";


export const gettimeClientRequest = () => {
  return {
    type:GET_TIMECLINET_REQUEST,
  };
};


export const gettimeClientSuccrss = (payload) => {
  return {
    type: GET_TIMECLINET_SUCCESS,
    payload,
  };
};

export const getClientSuccess = (payload) => {
    return {
      type: GET_CLINET_SUCCESS,
      payload,
    };
  };


export const gettimeClientFailure = () => {
  return {
    type: GET_TIMECLINET_ERROR,
  };
};

export const deletetimeClientRequest=()=>
{
  return {
    type: DELETE_TIMECLINET,
  };
}

export const deletetimeClientSuccess=()=>
{
  return {
    type: DELETE_TIMECLINET_SUCCESS,
  };
}

export const deletetimeClientFaliure=()=>
{
  return {
    type: DELETE_TIMECLINET_FAILURE,
  };
}


export const addtimeClientRequest=()=>
{
  return {
    type: ADD_TIMECLINET_REQUEST,
  };
}

export const addtimeClientSuccess=(payload)=>
{
  return {
    type: ADD_TIMECLINET_SUCCESS,payload
  };
}
export const addtimeClientFaliue=()=>
{
  return {
    type: ADD_TIMECLINET_FAILURE,
  };
}

export const addintime= (payload)=>(dispatch)=>
{
  

    dispatch(addtimeClientRequest())
  return axios({
    url: "http://localhost:8000/time/create",
    method: "post",
   
    data:payload,
     
    
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(addtimeClientSuccess(res.data))
    })
    .catch((err) => {
      console.log(err);
      dispatch(addtimeClientFaliue());
    });
}

export const gettime =  () => (dispatch) => {
  dispatch(gettimeClientRequest());
 return  axios({url:"http://localhost:8000/time/",
 method:"get",
}).then((res) =>
//console.log(res.data))
dispatch(gettimeClientSuccrss(res.data)))
    .catch((err) => dispatch(gettimeClientFailure()));
};

export const deletetime =  (_id) => (dispatch) => {
  dispatch(gettimeClientRequest());
  //console.log(id)
  return axios({url:`http://localhost:8000/time/create/time/${_id}/delete`,
    method:"delete",})
    .then((res) => dispatch(deletetimeClientSuccess(res.data)))
    .catch((err) => dispatch(deletetimeClientFaliure()));
};

export const updatetime =  (_id,payload) => (dispatch) => {
  dispatch(gettimeClientRequest());
  //console.log(id)
  return axios({url:`http://localhost:8000/time/create/time/${_id}/edit`,
    method:"patch",
    data:payload
  })
    .then((res) => dispatch(deletetimeClientSuccess(res.data)))
    .catch((err) => dispatch(deletetimeClientFaliure()));
};


export const addinClients= (payload)=>(dispatch)=>
{
  

    dispatch(addtimeClientRequest())
  return axios({
    url: "http://localhost:8000/Clients/create",
    method: "post",
   
    data:payload,
     
    
  })
    .then((res) => {
      // console.log(res.data);
      dispatch(addtimeClientSuccess(res.data))
    })
    .catch((err) => {
      console.log(err);
      dispatch(addtimeClientFaliue());
    });
}

export const getClients =  () => (dispatch) => {
  dispatch(gettimeClientRequest());
 return  axios({url:"http://localhost:8000/Clients/",
 method:"get",
}).then((res) =>
//console.log(res.data))
dispatch(getClientSuccess(res.data)))
    .catch((err) => dispatch(gettimeClientFailure()));
};

export const deleteClients =  (_id) => (dispatch) => {
  dispatch(gettimeClientRequest());
  //console.log(id)
  return axios({url:`http://localhost:8000/Clients/${_id}/delete`,
    method:"delete",})
    .then((res) => dispatch(deletetimeClientSuccess(res.data)))
    .catch((err) => dispatch(deletetimeClientFaliure()));
};

export const updateClients =  (_id,payload) => (dispatch) => {
  dispatch(gettimeClientRequest());
  //console.log(id)
  return axios({url:`http://localhost:8000/Clients/${_id}/edit`,
    method:"patch",
    data:payload
  })
    .then((res) => dispatch(deletetimeClientSuccess(res.data)))
    .catch((err) => dispatch(deletetimeClientFaliure()));
};