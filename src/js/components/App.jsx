import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import * as actions from '../actions';

import StudentDetails from './StudentDetails';

export class App extends React.Component {
  static propTypes = {
    fetchStudentsHRData: func.isRequired
  };

  componentDidMount() {
    const { fetchStudentsHRData } = this.props;
    fetchStudentsHRData();
  }

  render() {
    return (
      <div className="app">
        <StudentDetails />
      </div>
    );
  }
}

export default connect(null, {
  fetchStudentsHRData: actions.fetchStudentsHRData
})(App);
