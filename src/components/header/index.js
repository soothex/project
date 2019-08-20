import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class Header extends React.Component {

    render() {
        return (
            <Router>
            <ul className="nav justify-content-center">
                <li class="nav-item">
                    <Link to='/' className="nav-link">Registration</Link>
                </li>
                <li class="nav-item">
                    <Link to='/auth' className="nav-link">Auth</Link>
                </li>
                <li className="nav-item">
                    <Link to='/profile' className="nav-link">My profile</Link>
                </li>
                <li class="nav-item">
                    <Link to='/friend' className="nav-link">Friends</Link>
                </li>
                <li class="nav-item">
                    <Link to='/photo' className="nav-link">Photos</Link>
                </li>
                <li class="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Messages <span className="commingsoon">comming soon</span></a>
                </li>
                <li class="nav-item">
                    <Link to='/settings' className="nav-link">Settings</Link>
                </li>
                <li class="nav-item">
                    <Link to='/auth' className="nav-link">Exit</Link>
                </li>
            </ul>
            </Router>
        )
    }
}
