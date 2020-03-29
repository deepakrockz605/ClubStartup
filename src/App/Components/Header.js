import React, { PureComponent } from "react";
import Signup from './Signup';
import Login from './Login';
import '../CSS/Header.scss';
import Scrollspy from 'react-scrollspy';

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: false
        }
    }

    updateState = () => {
        console.log("here on click");
        this.setState({
            isLogin: true
        });
    }

    callBackLogin = () => {
        this.setState({
            isLogin: false
        });
    }

    render() {
        const { isLogin } = this.state;
        return (
            <div className='Header-wrapper'>
                <div className='tabs'>
                    <Scrollspy
                        className="Header-tablist" items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']}
                        currentClassName="isCurrent">
                        <li className='Header-tab'><a href="#section-1">Home</a></li>
                        <li className='Header-tab'><a href="#section-2">About</a></li>
                        <li className='Header-tab'><a href="#section-3">Vision</a></li>
                        <li className='Header-tab'><a href="#section-4">Mission</a></li>
                        <li className='Header-tab'><a href="#section-5">Contact Us</a></li>
                    </Scrollspy>
                </div>
                <div className='authentication'>
                    <Signup />
                    <div className='Login'>
                        <button className='header-button' onClick={this.updateState}>Log In</button>
                        {isLogin && <Login callBackLogin={this.callBackLogin} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;