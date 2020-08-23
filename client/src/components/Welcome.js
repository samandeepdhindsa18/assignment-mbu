import React from 'react';
import Header from './Header';
import Login from './auth/Login';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'reports',
    };
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
          <div className="three wide column">
            <div className="ui container">
              <h1>#Welcome!!</h1>
              <div class="ui three row grid">
                <div class="row">
                  <div class="ui fluid card">
                    <div class="image">
                      <img src="https://wellkeptwallet.com/wp-content/uploads/woman-reading-book-by-a-lake.jpg" />
                    </div>
                    <div class="content">
                      <a class="header">Read your posts!!</a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="ui fluid card">
                    <div class="image">
                      <img src="https://cdn77.pressenza.com/wp-content/uploads/2019/11/culture-of-peace.jpg" />
                    </div>
                    <div class="content">
                      <a class="header">Reports :)</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ten wide column">
            <Header show={this.selectedValue} />
          </div>
        </div>
        <div className="row">
          <div className="sixteen wide column">foot</div>
        </div>
      </div>
    );
  }
}

export default Welcome;
