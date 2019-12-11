import React from 'react';
import updateResumeData from './Actions/Data';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.updateResumeData('./resumeData.json');
  }

  render() {
    return (
      <div className="app">
        <div className="app__container">{this.props.children}</div>
      </div>
    );
  }
}

mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updateResumeData
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
