import axios from "axios";
import { FETCH_USER } from "./types";
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  //remove await from dispatch if proble arise
   dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken=(token)=>
async dispatch =>{
  
  const res=await axios.post("/api/stripe/v1",token);
  dispatch({type:FETCH_USER,payload:res.data});
}
export const handleTokenv2=(token)=>
async dispatch =>{
  
  const res=await axios.post("/api/stripe/v2",token);
  dispatch({type:FETCH_USER,payload:res.data});
}