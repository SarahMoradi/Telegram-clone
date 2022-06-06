import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './UserTypes';

import mainApi from '../../Services/axios-config';

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}
function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

//async action creator
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest);

    mainApi
      .get('/user/all')
      .then((res) => {
        const users = res.data.data.users;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.response.data.message));
      });
  };
};
