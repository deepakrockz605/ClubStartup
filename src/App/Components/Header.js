import React, { PureComponent } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Signup from './Signup';
import Login from './Login';
// import GoogleAuth from './GoogleAuth';
import '../CSS/Header.scss';

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
                <Tabs className='tabs'>
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
                </Tabs>
                <div className='authentication'>
                    <Signup/>
                    {/* <Login/> */}
                    {/* <GoogleAuth /> */}
                    <div className='Login'>
                        <button className='header-button' onClick = {this.updateState}>Log In</button>
                        {isLogin && <Login callBackLogin = {this.callBackLogin}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header