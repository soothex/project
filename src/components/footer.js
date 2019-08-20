import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { decorate } from 'mobx';


export @observer class Footer extends Component{
    super(props){

    }

    render(){
        const { Store } = this.props;

        return (
            <React.Fragment>
                <p className="float-right"><a href="#">Back to top</a></p>
                <button onClick={this.props.userName} >Get User</button>
                <p>{this.props.userData}</p>
            </React.Fragment>
        )
    }
}
