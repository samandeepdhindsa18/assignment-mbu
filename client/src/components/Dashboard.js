import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Reports from './Reports';
import Login from './auth/Login';
import '../App.css';
class Dashboard extends React.Component {
  state = { content: 'posts' };

  renderContent() {
    console.log(this.props.authenticated);
    if (this.props.authenticated) {
      if (this.state.content === 'reports') {
        return <Reports />;
      }

      return <Posts />;
    } else {
      return (
        <div>
          <Login />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui grid container" style={{ marginTop: '10px' }}>
        <div className="row">
          <div className="sixteen wide column">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="two wide column">
            <div className="ui container">
              <h1>#Enjoy</h1>
              <div class="ui three row grid">
                <div class="row">
                  <div class="ui fluid card">
                    <div class="image">
                      <img src="https://wellkeptwallet.com/wp-content/uploads/woman-reading-book-by-a-lake.jpg" />
                    </div>
                    <div class="content">
                      <a
                        class="header"
                        onClick={() => this.setState({ content: 'posts' })}
                      >
                        Posts..
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="ui fluid card">
                    <div class="image">
                      <img src="https://cdn77.pressenza.com/wp-content/uploads/2019/11/culture-of-peace.jpg" />
                    </div>
                    <div class="content">
                      <a
                        class="header"
                        onClick={() => this.setState({ content: 'reports' })}
                      >
                        Reports..
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fourteen wide column">{this.renderContent()}</div>
        </div>
        <div className="row">
          <div className="sixteen wide column">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Dashboard);
