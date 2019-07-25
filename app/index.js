import "./style.css";
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return 'Hello.. Welcome to React !!';
  }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
