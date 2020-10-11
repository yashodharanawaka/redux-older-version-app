import axios from "axios";

// Create Redux action types
export const GET_DRAMAS = "GET_DRAMAS";
export const GET_DRAMAS_SUCCESS = "GET_DRAMAS_SUCCESS";
export const GET_DRAMAS_FAILURE = "GET_DRAMAS_FAILURE";

// Create Redux action creators that return an action
export const getDramas = () => ({
  type: GET_DRAMAS,
});

export const getDramasSuccess = (dramas) => ({
  type: GET_DRAMAS_SUCCESS,
  payload: dramas,
});

export const getDramasFailure = () => ({
  type: GET_DRAMAS_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchDramas() {
  return async (dispatch) => {
    dispatch(getDramas());
    try {
      const response = (
        await axios.get(
          "https://my-json-server.typicode.com/yashodharanawaka/api-for-testing/dramas"
        )
      ).data;
      //   console.log(response);
      dispatch(getDramasSuccess(response));
    } catch (error) {
      dispatch(getDramasFailure());
    }
  };
}
