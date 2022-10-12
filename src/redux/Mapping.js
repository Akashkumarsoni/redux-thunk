import { fetchingdata } from "./Action";


export const mappropstostate = (state) => {
  return { ...state };
};

export const mappropstodispatch = (dispatch) => {
  return {
    fetch: () => dispatch(fetchingdata())
  };
};


