import axios from 'axios';
import jsonplaceholder from '../apis/JSONPlaecholder';
import { AUTH_USER, AUTH_ERROR } from './types';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/posts');
  //console.log(response.data);
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchReports = () => async (dispatch) => {
  const response = await axios.get('https://reqres.in/api/unknown');
  //console.log(response.data);
  dispatch({ type: 'FETCH_REPORTS', payload: response.data });
};

export const deletePost = (post) => {
  console.log(post);
  return {
    type: 'DELETE_POST',
    payload: post,
  };
};

export const login = (username, password) => async (dispatch) => {
  try {
    // console.log(password);
    const response = await axios.get('https://reqres.in/api/login');
    const user = response.data.data.filter((d) => {
      return username === d.name;
    });

    const token = user.map((u) => {
      return u.name;
    });

    //console.log(user.length);
    if (user.length == '0') {
      token = null;
    }
    console.log(token);
    dispatch({ type: AUTH_USER, payload: user });
    localStorage.setItem('token', token);
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};
export const logout = () => {
  console.log('i am lout');
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: '',
  };
};
