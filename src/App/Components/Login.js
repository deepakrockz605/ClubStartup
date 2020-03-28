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
        if( this.props.callBackLogin && this.props.callBackLogin());
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
            <div id="myModal" className="login-modal">
                <div className="modal-content">
                    <span className="close" onClick = {this.updateState}>&times;</span>
                    <p style={{fontSize: '22px' }}>Log In</p>
                    <div><img src={require("../Images/login.png")} alt="Login" className="login-image" /></div>
                    <form className = "login-box" onSubmit={this.onRegisterFormSubmit}>
                        <div className="login-box-container">
                            <i className="fa fa-user icon" aria-hidden="true"></i>
                            <input className = "login-box-inputBox" placeholder="Enter your Email id" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        </div>
                        <div className="login-box-container">
                            <i className="fa fa-lock icon" aria-hidden="true"></i>
                            <input type = "password" className = "login-box-inputBox" placeholder="Enter your Password" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        </div>
                        <button className='login-box-button'>Log In</button>
                    </form>
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