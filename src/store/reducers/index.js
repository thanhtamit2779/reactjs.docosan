import { combineReducers } from 'redux';
import ApiReducer from './ApiReducer';

const reducer = { 
  api: ApiReducer
};
const initReducers = combineReducers(reducer);

const rootReducer = (state = {}, action) => {
  switch (action.type) { 
    default:
      return initReducers(state, action);
  }
};
export default rootReducer;
