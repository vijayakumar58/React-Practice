import React, { Component }from 'react'
import './Header.css';

class Header extends Component {
    render () {
        return (
            <nav className='header'>
                <h1>
                    {this.props.instituteName}
                </h1>
                <p>
                    {this.props.heading}
                </p>
            </nav>
        )
    }
}

export default Header 