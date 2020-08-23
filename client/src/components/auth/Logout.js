import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        Hope to see you again!!
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default connect(null, actions)(Logout);
