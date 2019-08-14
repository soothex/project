import React from 'react';



export class Header extends React.Component {

    render() {
        return (
            <ul className="nav justify-content-center">
                <li class="nav-item">
                    <a className="nav-link" href="/">Registration</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="/auth/">Auth</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/profile/">My profile</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="/friend/">Friends</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="/photo/">Photos</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Messages <span className="commingsoon">comming soon</span></a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="/settings/">Settings</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="/auth/">Exit</a>
                </li>
            </ul>
        )
    }
}
