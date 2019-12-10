import React from 'react';
import './App.scss';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  componentDidMount() {
    this.getResumeData();
  }

  getResumeData() {
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app__container">{this.props.children}</div>
      </div>
    );
  }
}
