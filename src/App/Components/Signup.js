import React, { PureComponent } from 'react';
import Login from './Login';
import '../CSS/Signup.scss';
import '../CSS/Login.scss';

class Signup extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isSignUp: false,
            isRedirectToLogin: false,
            validation: [
                {
                    error: "Username field cant be empty",
                    isError: true
                },
                {
                    error: "Only Numbers",
                    isError: true
                },
                {   
                    error: "Email id should contain @ in it",
                    isError: true
                },
                {
                    error: "You have entered wrong password",
                    isError: true
                }
            ]
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

    onSubmitClick = (event) => {
        event.preventDefault();
        console.log('hererrerere', event);
        console.log(event.target[0].value);
        console.log(event.target);
        console.log(event.target.elements);
        // console.log(event.target.username.value)
        // console.log(this.inputNode.value)
    }

    checkSignup() {
        const { isSignUp, validation } = this.state;
        console.log("here in Sign Up");
        return (isSignUp && (
            <div id="myModal" className="signup-modal">
                <div className="modal-content">
                    <span className="close" onClick = {this.updateOnCloseClick}>&times;</span>
                    <p style={{fontSize: '22px'}}>Create a New Account</p>
                    <div><img src={require("../Images/signup2.png")} alt="Signup" className="signup-image" /></div>
                    <form className = "signup-box" onSubmit={this.onSubmitClick}>
                        <div className="signup-box-container">
                            <i className="fa fa-user icon" aria-hidden="true"></i>
                            <input className = "signup-box-inputBox" placeholder="Enter your Name" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        </div>
                        <div className="error-message">{validation[0].error}</div>
                        <div className="signup-box-container">
                            <i className="fa fa-phone icon" aria-hidden="true"></i>
                            <input className = "signup-box-inputBox" placeholder="Enter your Phone Number" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        </div>
                        <div className="error-message">{validation[1].error}</div>
                        <div className="signup-box-container">
                            <i className="fa fa-envelope icon" aria-hidden="true"></i>
                            <input className = "signup-box-inputBox" placeholder="Enter your Email id" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        </div>
                        <div className="error-message">{validation[2].error}</div>
                        <div className="signup-box-container">
                            <i className="fa fa-lock icon" aria-hidden="true"></i>
                            <input type = "password" className = "signup-box-inputBox" placeholder="Create Password" value = {this.value} onChange = {(e) => this.onChange(e)}/>
                        </div>
                        <div className="error-message">{validation[3].error}</div>
                        <button className='signup-box-button'>Sign Up</button>
                    </form>
                    <div style={{color:'grey'}}><hr style={{margin: '10px'}}/></div>
                    <div className = "signup-box">
                        <span style={{margin: '10px 0px', fontSize: '18px'}}>Have an account ? </span>
                        <span style={{color: '#2a2aee', fontSize: '18px', cursor: 'pointer'}} onClick = {this.redirectToLoginPage}>Log In</span>
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