import React from 'react';
import ReactDOM from 'react-dom';

class MyButton extends React.Component {
  eventHandler1() {
    console.log('eventHandler1 called!');
  }

  eventHandler2() {
    console.log('eventHandler2 called!');
  }

  handleClick = () => {
    this.eventHandler1();
    this.eventHandler2();
  }

  render() {
    return (
      <button onClick={this.handleClick}>Here's a button!</button> // here `onClick` is set to a named function `handleClick` where the function body contains multiple function calls that will be triggered on the click event of the button
    )
  }
};


export default MyButton