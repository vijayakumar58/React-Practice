import React, { Component }from 'react'
import './header.css';
import { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <nav className='header'>
                <h1>
                    {this.props.heading}
                </h1>
                <p>
                    {this.props.subhead}
                </p>
            </nav>
        )
    }
}

export default Header 