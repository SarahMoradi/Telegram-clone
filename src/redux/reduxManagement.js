//import libraries
const redux = require('redux');
const { default: mainApi } = require('../Services/axios-config');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxThunk = require('redux-thunk').default;

//actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

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

//Reducer
const initialState = {
  loading: false,
  data: [],
  error: '',
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: '',
        data: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return;
  }
};

//async action creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest);

    mainApi
      .get('/user/all')
      .then((res) => {
        const users = res.data.data.users;
        console.log(users, 'user from redux func');
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.response.data.message));
      });
  };
};

const store = createStore(userReducer, applyMiddleware(reduxThunk));
store.dispatch(fetchUsers());
export default store;
