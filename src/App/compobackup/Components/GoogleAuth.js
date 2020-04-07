import React, { Component } from "react";
import { SIGN_IN, SIGN_OUT } from '../../Store/Actions';
import { connect } from "react-redux";


class GoogleAuth extends Component {
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
        console.log('changeSignedStatus --');
        if (isSignedIn) {
            this.props.SIGN_IN(this.auth.currentUser.get().getId());
        } else {
            this.props.SIGN_OUT();
        }
    }

    renderAuth() {
        console.log('this.props ->> ', this.props.isSignedIn);
        if (this.props.isSignedIn === null) {
            return <div>Null</div>
        } else if (this.props.isSignedIn === true) {
            return <button onClick={this.onSignOutClick} className='header-button'>Sign Out</button>
        } else {
            return <button onClick={this.onSignInClick} className='header-button'>Login</button>
        }
    }

    onSignInClick = () => {
        console.log('onSignInClick');
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    render() {
        console.log('IN GOOGLE AUTH RENDER ......');
        return (
            <div className='googleAuth'>
                {this.renderAuth()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { SIGN_IN, SIGN_OUT })(GoogleAuth);