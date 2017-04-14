import {combineReducers} from 'redux';

import CollectionReducer from './CollectionReducer';

export default combineReducers({
  posts: CollectionReducer,
});