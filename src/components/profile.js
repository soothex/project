import React from 'react';
import { Header } from './header/';

export class ProfileComponent extends React.Component {

    render() {
        return (
            <React.Fragment>
            <h3>Example ProfileComponent</h3>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/images/profile-example.jpg" width="100%" />
                        </div>
                        <div className="col-lg-6">
                            <p><span>First Name:</span> Jenny Wheeler</p>
                            <p><span>Last Name:</span> Example</p>
                            <p><span>Age:</span> Example</p>
                            <p><span>Email:</span> jenny.wheeler82@example.com</p>
                            <p><span>My birthday is:</span> 6/2/1976</p>
                            <p><span>My address is:</span> 2318 Hillcrest Rd</p>
                            <p><span>My phone number is:</span> (691)-263-3903</p>
                            <p><span>My password is:</span> wookie</p>
                        </div>
                    </div>
                    <h2>Publications</h2>
                    <div className="row">

                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}