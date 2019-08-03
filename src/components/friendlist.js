import React from 'react';
import { Header } from './header/';

export class FriendListComponent extends React.Component {

    render() {
        return (
            <React.Fragment>
            <Header />
            <h3>Example FriendListComponent</h3>
            <div class="card">
                <div class="card-body">
                    <p>Your friends list</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
