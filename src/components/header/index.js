import React from 'react';

export class Header extends React.Component {

    render() {
        return (
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#">My profile</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="#">Friends</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="#">Photos</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Messages</a>
                </li>
            </ul>
        )
    }
}
