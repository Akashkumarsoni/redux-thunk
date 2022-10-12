import { FETCHED_DATA } from "./Constants";

export const fetchingdata = (event) => {
    return (dispatch) => {
    
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then((response) => response.json())
      .then((temp) => {
        // console.log(temp)
        dispatch({
        type: FETCHED_DATA,
        payload: temp
      })
    })
      
  };
};
