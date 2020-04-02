import React from 'react'
import {Route , Switch } from 'react-router-dom';
import Home from '../Components/Home'
import PageNotFound from './PageNotFound'
import RegistrationSteps from '../Components/Steps/RegistrationSteps'

function RestrictedContainer() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/stepForm' component={RegistrationSteps}/>
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}

export default RestrictedContainer
