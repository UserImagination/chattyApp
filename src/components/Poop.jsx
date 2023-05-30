import React from 'react';
import { Link } from 'react-router-dom';

class Poop extends React.Component {
    render(){
    return (
        <div>
            <Link to='Page2'>Link to page 2</Link>
            <h1>This is a homepage</h1>
        </div>
        );
    }
}

export default Poop;