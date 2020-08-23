import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './postsReducer';
import reportsReducer from './reportsReducer';
import auth from './auth';

export default combineReducers({
  auth,
  listOfPosts: postsReducer,
  listOfReports: reportsReducer,
});
