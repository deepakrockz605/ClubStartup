import React, { PureComponent } from 'react'
import withScrollReveal from 'react-scrollreveal';
import Fade from 'react-reveal/Fade';
import "../CSS/About.scss";


class About extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const { animationContainerReference } = this.props;
        return (
        <div className="About--section" >
            <h3 className="section--header text-center">About US</h3>
                <div className="aboutus--blocks" ref={animationContainerReference}>

                    <ul className="about--ulList">

                        <li className="about--list" >
                            <Fade left>
                            <div className="about--listBox">
                                <div className="about--imgSec">
                                    <img src='https://www.w3schools.com/w3images/house5.jpg' alt="img" className="img-fluid" />
                                </div>
                                <div className="aboutus--description">
                                    <p className="aboutus--descriptionHeader">General Information</p>
                                    <p className="aboutus--descriptionDetails">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                            </Fade>
                        </li>

                        <li className="about--list">
                        <Fade bottom>
                            <div className="about--listBox">
                                <div className="about--imgSec">
                                    <img src='https://www.w3schools.com/w3images/house5.jpg' alt="img" className="img-fluid" />
                                </div>
                                <div className="aboutus--description">
                                    <p className="aboutus--descriptionHeader">General Information</p>
                                    <p className="aboutus--descriptionDetails">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        </li>

                        <li className="about--list">
                            <Fade right>
                            <div className="about--listBox">
                                <div className="about--imgSec">
                                    <img src='https://www.w3schools.com/w3images/house5.jpg' alt="img" className="img-fluid" />
                                </div>
                                <div className="aboutus--description">
                                    <p className="aboutus--descriptionHeader">General Information</p>
                                    <p className="aboutus--descriptionDetails">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                            </Fade>
                        </li>

                        <li className="about--list" >
                            <Fade left>
                            <div className="about--listBox">
                                <div className="about--imgSec">
                                    <img src='https://www.w3schools.com/w3images/house5.jpg' alt="img" className="img-fluid" />
                                </div>
                                <div className="aboutus--description">
                                    <p className="aboutus--descriptionHeader">General Information</p>
                                    <p className="aboutus--descriptionDetails">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                            </Fade>
                        </li>

                        <li className="about--list">
                        <Fade bottom>
                            <div className="about--listBox">
                                <div className="about--imgSec">
                                    <img src='https://www.w3schools.com/w3images/house5.jpg' alt="img" className="img-fluid" />
                                </div>
                                <div className="aboutus--description">
                                    <p className="aboutus--descriptionHeader">General Information</p>
                                    <p className="aboutus--descriptionDetails">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        </li>

                        <li className="about--list">
                            <Fade right>
                            <div className="about--listBox">
                                <div className="about--imgSec">
                                    <img src='https://www.w3schools.com/w3images/house5.jpg' alt="img" className="img-fluid" />
                                </div>
                                <div className="aboutus--description">
                                    <p className="aboutus--descriptionHeader">General Information</p>
                                    <p className="aboutus--descriptionDetails">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                            </Fade>
                        </li>

                 
                    </ul>
                </div>
        </div>
    )
    }
}

export default withScrollReveal([
    {
      selector: '.about--ulList',
      options: {
        reset: true,
      },
    },
    {
      selector: '.about--list',
      options: {
        reset: true,
        delay: 500,
      },
      interval: 300
    }
  ])(About) 


