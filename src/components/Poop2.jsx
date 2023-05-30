import React from 'react';
import { Link } from 'react-router-dom';

class Poop extends React.Component {
    render(){
    return (
    <div>
      <Link to='/'>Link to Home</Link>
      <h1>Hello</h1>
      <h2>This is a Page 2</h2>
    </div>
    );
  }
}

export default Poop;