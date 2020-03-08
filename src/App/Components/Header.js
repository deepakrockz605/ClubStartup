import React, { PureComponent } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Signup from './Signup';
import Login from './Login';

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
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
                    <Login/>
                </div>
            </div>
        )
    }
}

export default Header