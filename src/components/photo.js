import React from 'react';
import { Header } from './header/';
import styled from 'styled-components';

const Photo = styled.div`
    width: 100%;
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
            <h3>Example PhotoComponent</h3>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                            <div className="col-lg-4"> <Photo /></div>
                            <div className="col-lg-4"> <Photo /></div>
                            <div className="col-lg-4"> <Photo /></div>
                            <div className="col-lg-4"> <Photo /></div>
                            <div className="col-lg-4"> <Photo /></div>
                            <div className="col-lg-4"> <Photo /></div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}