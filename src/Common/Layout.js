import React, { PureComponent } from 'react'
import Navbar from './Navbar'
import Footer from '../Components/Footer';

class Layout extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let show = 
        <div>
            <Navbar />
            <div className="corporate-wrapper">
                {this.props.children}
            </div>
            <Footer />
        </div>
        return (
            <div>
                {show}
            </div>
        )
    }
}

export default Layout