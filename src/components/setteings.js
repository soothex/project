import React from 'react';
import styled from 'styled-components';


export class SettingsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          customStyle: '',
          }
        };

    render() {
        return (
            <React.Fragment>
            <h3>Example PhotoComponent</h3>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <p>First Name:</p>
                                    <input className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <p>Last Name:</p>
                                    <input className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <p>Age:</p>
                                    <input className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <p>Email:</p>
                                    <input className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <p>My birthday is:</p>
                                    <input className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <p>My phone number is:</p>
                                    <input className="form-control"></input>
                                </div>
                                <button type="submit" className="btn btn-outline-primary btn-sm">Save settings</button>
                            </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}