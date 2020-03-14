import React, { PureComponent } from 'react';
import Login from './Login';
import '../CSS/Signup.scss';
import '../CSS/Login.scss';

class Signup extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isSignUp: false,
            isRedirectToLogin: false
        }
    }

    updateState = () => {
        console.log("here on click");
        this.setState({
            isSignUp: true
        });
    }

    updateOnCloseClick = () => {
        console.log("here on click");
        this.setState({
            isSignUp: false
        });
    }

    onChange() {
        console.log('input change');
    }

    redirectToLoginPage = () => {
        this.setState({
            isSignUp: false,
            isRedirectToLogin: true
        });
    }

    checkSignup() {
        const { isSignUp } = this.state;
        console.log("here in Sign Up");
        return (isSignUp && (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick = {this.updateOnCloseClick}>&times;</span>
                    <p style={{margin: '10px 0px', fontSize: '22px', marginBottom: '20px'}}>Create a New Account</p>
                    <div className = "signup-box">
                        <input className = "signup-box-inputBox" placeholder="Enter your Name" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        <input className = "signup-box-inputBox" placeholder="Enter your Phone Number" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        <input className = "signup-box-inputBox" placeholder="Enter your Email id" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        <input type = "password" className = "signup-box-inputBox" placeholder="Create Password" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        <button className='signup-box-button' onClick = {this.updateState}>Sign Up</button>
                    </div>
                    <div style={{color:'grey'}}><hr style={{margin: '10px'}}/></div>
                    <div className = "signup-box">
                        <span style={{margin: '10px 0px', fontSize: '16px'}}>Have an account ? </span>
                        <span style={{color: '#2a2aee', fontSize: '16px', cursor: 'pointer'}} onClick = {this.redirectToLoginPage}>Log In</span>
                    </div>
                </div>
            </div>
        ));
    }

    callBackLogin = () => {
        console.log('callback login .... ');
        this.setState({
            isRedirectToLogin: false
        });
    }

    checkLogin() {
        const { isRedirectToLogin } = this.state;
        return (isRedirectToLogin && <Login callBackLogin = {this.callBackLogin}/>
        );
    }


    render() {
        return (
            <div className='Signup'>
                <button className='header-button' onClick = {this.updateState}>Sign Up</button>
                {this.checkSignup()}
                {this.checkLogin()}
            </div>
        );
    }
}

export default Signup;