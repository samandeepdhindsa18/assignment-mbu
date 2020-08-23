import React from 'react';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment form-page">
        <div className="content">
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>T&C</li>
            <li>TermsOfUse</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div class="ui icon menu container">Returns</div>
      </div>
    );
  }
}

//once we will pass actions, they are assigned to app as props.then in app component we will call action creators.
export default Footer;
