import React from 'react';
import { Header } from './header/';
import styled from 'styled-components';

const Photo = styled.div`
    height: 300px;
    background-color: #dee2e6;
    margin: 10px;
`

export class PhotoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          customStyle: '',
          }
        };

    render() {
        return (
            <React.Fragment>
            <Header />
            <h3>Example PhotoComponent</h3>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                            <Photo className="col-lg-4"/>
                            <Photo className="col-lg-4"/>
                            <Photo className="col-lg-4"/>
                            <Photo className="col-lg-4"/>
                            <Photo className="col-lg-4"/>
                            <Photo className="col-lg-4"/>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}