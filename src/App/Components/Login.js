import React, { PureComponent } from 'react';
import '../CSS/Login.scss';

class Login extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLoginHere: true
        }
        console.log('constructor ', this);
    }

    updateState = () => {
        console.log("here on click");
        this.setState({
            isLoginHere: false
        });
    }

    updateOnCloseClick = () => {
        console.log("here on click");
        this.setState({
            isLoginHere: false
        });
        if( this.props.callBackLogin && this.props.callBackLogin());
    }

    onChange() {
        console.log('input change');
    }

    googleAuth = () => {
        console.log('IN GOOGLE AUTH'); // boolean true and then component call in render method
    }

    render() {
        console.log('IN LOGIN CONSOLE');
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
                        <span style={{color: '#2a2aee', fontSize: '16px', cursor: 'pointer'}} onClick= {this.googleAuth}>Click here</span>
                    </div>
                </div>
            </div>
        ));
    }
}

export default Login;