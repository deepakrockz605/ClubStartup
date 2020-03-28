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
                {/* <Tabs className='tabs'>
                    <TabList className='Header-tablist'>
                        <Tab className='Header-tab'>Home</Tab>
                        <Tab className='Header-tab'>About us</Tab>
                        <Tab className='Header-tab'>Vision</Tab>
                        <Tab className='Header-tab'>Mission</Tab>
                    </TabList>

                    <TabPanel className='TabPanel'>
                        <h2>Lets Play</h2>
                    </TabPanel>
                    <TabPanel className='TabPanel'>
                        <h2>WEBROSCLUB ...</h2>
                    </TabPanel>
                    <TabPanel className='TabPanel'>
                        <h2>Baali trip</h2>
                    </TabPanel>
                    <TabPanel className='TabPanel'>
                        <h2>Richie rich</h2>
                    </TabPanel>
                </Tabs> */}
                <div className='tabs'>
                    <Scrollspy
                        className="Header-tablist" items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']}
                        currentClassName="isCurrent">
                        <li><a href="#section-1" className='Header-tab'>Home</a></li>
                        <li><a href="#section-2" className='Header-tab'>About</a></li>
                        <li><a href="#section-3" className='Header-tab'>Vision</a></li>
                        <li><a href="#section-4" className='Header-tab'>Mission</a></li>
                        <li><a href="#section-5" className='Header-tab'>Contact Us</a></li>
                    </Scrollspy>
                </div>
                <div className='authentication'>
                    <Signup />
                    {/* <Login/> */}
                    {/* <GoogleAuth /> */}
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