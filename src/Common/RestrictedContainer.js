import React from 'react'
import {Route , Switch } from 'react-router-dom';
import Banner from '../Components/Banner'
import Test from '../Components/Test'
import PageNotFound from '../Common/PageNotFound'

function RestrictedContainer() {
    return (
        <Switch>
            <Route exact path='/' component={Banner}/>
            <Route exact path='/test' component={Test}/>
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}

export default RestrictedContainer
