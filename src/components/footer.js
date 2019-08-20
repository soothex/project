import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { decorate } from 'mobx';



@observer
class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            UserReceived: false,
            UserName: null,
        }
        this.getUserData = this.getUserData.bind(this);
    }

    getUserData(){
        this.setState({
            UserReceived: true,
        });
    }

    render(){
        const { Store } = this.props;

        return (
            <div className="card">
                <p className="float-right"><a href="#">Back to top</a></p>
                <button onClick={Store.getRandomUser}>Get User</button>
                {Store.userData ? (
                    <div>
                        <p>{this.state.UserName}</p>
                        
                        <img src={Store.userData.picture.medium} />
                        <p>{Store.userData.login.username}</p>
                        <p>{Store.userData.login.password}</p>
                    </div> )
                : null}
                
            </div>
        )
    }
}

export default Footer;