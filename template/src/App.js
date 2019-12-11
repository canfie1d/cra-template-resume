import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateResumeData } from './Actions/Data';
import { resumeData } from './resumeData';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.updateResumeData(resumeData);
  }

  render() {
    return (
      <div className="app">
        <div className="app__container">{this.props.children}</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateResumeData
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
