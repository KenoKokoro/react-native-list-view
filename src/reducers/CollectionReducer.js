import {ListView} from 'react-native';

let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2});

const INITIAL_STATE = {
  posts: [],
  ds: ds.cloneWithRows([]),
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING_POSTS":
      return {...state, loading: true};

    case "POSTS_FETCH_SUCCESS":
      return {...state, loading: false, posts: action.payload, ds: ds.cloneWithRows(action.payload)};

    case "POST_REMOVED":
      return {...state, loading: false, posts: action.payload, ds: ds.cloneWithRows(action.payload)};

    default:
      return state;
  }
};
