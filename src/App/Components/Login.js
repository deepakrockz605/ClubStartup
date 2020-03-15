import React, { PureComponent } from 'react';
// import { SIGN_IN, SIGN_OUT } from '../../Store/Actions';
// import GoogleAuth from './GoogleAuth';
import '../CSS/Login.scss';

class Login extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLoginHere: true,
            userId: null
        }
        console.log('constructor ', this);
    }

    componentDidMount() {
        console.log('componentDidMountcomponentDidMount');
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '191483958587-js6uiijoc757ulf3hul6ab2uq5oqa9b9.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.changeSignedStatus(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.changeSignedStatus);
            });
        });
    }

    changeSignedStatus = (isSignedIn) => {
        console.log('changeSignedStatus ->', isSignedIn);
        if (isSignedIn) {
            this.setState({
                userId: this.auth.currentUser.get().getId()
            });
        } else {
            this.props.SIGN_OUT();
        }

    }

    updateState = () => {
        this.setState({
            isLoginHere: false
        });
    }

    updateOnCloseClick = () => {
        this.setState({
            isLoginHere: false
        });
        if( this.props.callBackLogin && this.props.callBackLogin());
    }

    onChange() {
        console.log('input change');
    }

    googleAuthRequired = () => {
        this.setState({
            isLoginHere: false,
        });
        if( this.props.callBackLogin && this.props.callBackLogin());
        this.auth.signIn();
    }

    render() {
        const { isLoginHere } = this.state;
        return (isLoginHere && (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick = {this.updateOnCloseClick}>&times;</span>
                    <p style={{margin: '10px 0px', fontSize: '22px', marginBottom: '20px'}}>Log In</p>
                    <div className = "login-box">
                        <input className = "login-box-inputBox" placeholder="Enter your Email id" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        <input type = "password" className = "login-box-inputBox" placeholder="Enter your Password" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        <button className='login-box-button' onClick = {this.updateState}>Log In</button>
                    </div>
                    <div style={{color:'grey'}}><hr style={{margin: '10px'}}/></div>
                    <div className = "login-box">
                        <span style={{margin: '10px 0px', fontSize: '16px'}}>Log In with Google ? </span>
                        <span style={{color: '#2a2aee', fontSize: '16px', cursor: 'pointer'}} onClick= {this.googleAuthRequired}>Click here</span>
                    </div>
                </div>
            </div>
        ));
    }
}

export default Login;