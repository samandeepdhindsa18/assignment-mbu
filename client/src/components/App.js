import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Posts from './Posts';
import Reports from './Reports';
import Dashboard from './Dashboard';
import Footer from './Footer';
//import Welcome from './Welcome';

class App extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/reports" component={Reports} />
            <Route path="/footer" component={Footer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
