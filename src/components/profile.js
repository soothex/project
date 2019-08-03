import React from 'react';
import { Header } from './header/';

export class ProfileComponent extends React.Component {

    render() {
        return (
            <React.Fragment>
            <Header />
            <h3>Example ProfileComponent</h3>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Main Photo</p>
                        </div>
                        <div className="col-lg-6">
                            <p><span>First Name:</span> Example</p>
                            <p><span>Last Name:</span> Example</p>
                            <p><span>Age:</span> Example</p>
                            <p><span>Email:</span> Example</p>
                            <p><span>First Name:</span> Example</p>
                            <p><span>First Name:</span> Example</p>
                            <p><span>First Name:</span> Example</p>
                            <p><span>First Name:</span> Example</p>
                        </div>
                    </div>
                    <div className="row">
                        
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}