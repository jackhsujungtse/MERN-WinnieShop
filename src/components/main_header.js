import React, { Component } from 'react';
import { Link } from 'react-router';

class MainHeader extends Component {
    render() {
        return (
            <div className='homecontainer'>
                <nav className='header'>
                    <Link to = "/"><img src="assets/images/winnielogo.png" className='header-logo' width="15%" /></Link>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to = "/shopping">Shopping</Link>
                        </li>
                        <li>
                            <Link to = "/proposal">Call Proposal</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default MainHeader;
