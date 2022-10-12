import { FETCHED_DATA } from "./Constants";

const initialstate = {
  user_data: [],
  show : false
};

export const MyReducers = (state = initialstate, actions) => {
  if (actions.type === FETCHED_DATA) {
    console.log("MY DATA :   ",actions.payload)
    return {
      ...state,
      user_data : actions.payload,
      show : true
    }
  }
  return {...state}
};
