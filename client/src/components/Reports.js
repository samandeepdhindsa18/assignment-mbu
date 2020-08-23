import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Reports extends React.Component {
  componentDidMount() {
    this.props.fetchReports();
  }

  renderContent() {
    console.log(this.props.reports);
    const divStyle = {
      backgroundColor: '',
    };

    if (this.props && this.props.reports.length > 0) {
      return this.props.reports.map((report) => {
        return (
          <div class="ui cards">
            {report.data.map((report) => {
              return (
                <a
                  className={` card`}
                  style={{ backgroundColor: `${report.color}` }}
                >
                  <li>
                    {report.name} <br />
                    {report.color}
                  </li>{' '}
                </a>
              );
            })}
          </div>
        );
      });
    } else {
      return (
        <div>
          <ul>No reports</ul>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="ui secondary segment">
        <div className="ui grid container">
          <div className="row">
            <div className="ui four  cards">{this.renderContent()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.listOfReports.reports);
  return { reports: state.listOfReports.reports };
};

export default connect(mapStateToProps, actions)(Reports);
