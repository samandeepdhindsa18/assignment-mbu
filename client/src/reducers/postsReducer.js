const initialPosts = {
  posts: [],
};
export default (state = [], action) => {
  const posts = state.initialPosts;
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'DELETE_POST':
      // items: state.items.filter(item => item !== action.payload)
      const newState = state.filter((post) => post.id !== action.payload.id);
      return newState;
    // return {
    //   posts: state.posts.filter((post) => post.id !== action.payload),

    default:
      return state;
  }
};
