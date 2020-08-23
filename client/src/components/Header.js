import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import './HeaderStyle.css';

class Header extends Component {
  renderLinks() {
    console.log(this.props.authenticated);
    if (this.props.authenticated) {
      return (
        <div>
          <i class="user icon"></i>
          <Link to="/logout">Sign Out</Link>
        </div>
      );
    } else {
      return (
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <i class="user outline icon"> </i>Login
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui inverted menu">
        <div className="left menu bar">
          <a className="active item">
            <h3>Home</h3>
          </a>
        </div>
        <div className="center menu bar">
          <h3>Read your posts here!!</h3>
        </div>
        {/* <div className="center menu bar"></div>
        <div className="center menu bar"></div>
        <div className="center menu bar"></div> */}
        <div className="left menu bar"></div>
        <div className="left menu bar"></div>
        <div className="right menu bar">
          <a className="item">{this.renderLinks()}</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
