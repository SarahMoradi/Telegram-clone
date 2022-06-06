import rootReducer from './rootReducer';

const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxThunk = require('redux-thunk').default;

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
