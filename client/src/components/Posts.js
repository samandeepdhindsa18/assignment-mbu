import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div class="ui card">
          <div class="content">
            <div class="header">{post.title}</div>
          </div>
          {/* <div className="item" key={post.id}> */}
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h6>{post.title}</h6>
              <p>{post.body}</p>
              <button onClick={() => this.props.deletePost(post)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui four  cards">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.listOfPosts };
};

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
