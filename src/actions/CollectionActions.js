import {instance as $http} from './../lib/HttpRequest';
import {AsyncStorage} from 'react-native';

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOADING_POSTS',
    });

    AsyncStorage.getItem('posts').then(data => {
      if (data && data.length) {
        dispatch({type: 'POSTS_FETCH_SUCCESS', payload: JSON.parse(data)});
        return;
      }

      $http.get('https://jsonplaceholder.typicode.com/posts').then(json => {
        AsyncStorage.setItem('posts', JSON.stringify(json));
        dispatch({type: 'POSTS_FETCH_SUCCESS', payload: json});
      });
    });
  }
};

export const deletePostFromState = (post, postsInState) => {
  return (dispatch) => {
    postsInState.splice(postsInState.findIndex(object => object.id === post.id), 1);

    AsyncStorage.setItem('posts', JSON.stringify(postsInState));
    dispatch({type: 'POST_REMOVED', payload: postsInState});
  }
};

export const refreshPostsFromAjax = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOADING_POSTS',
    });

    $http.get('https://jsonplaceholder.typicode.com/posts').then(json => {
      AsyncStorage.setItem('posts', JSON.stringify(json));
      dispatch({type: 'POSTS_FETCH_SUCCESS', payload: json});
    });
  }
};
