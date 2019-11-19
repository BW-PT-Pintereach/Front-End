import React from 'react'
import { Route } from 'react-router-dom'
import LoginSignup from './LoginSignup'
import Articles from './Articles'
import PrivateRoute from './PrivateRoute';

export default function (props) {

    return (
        <>
            <Route exact path='/' render={(props) => <LoginSignup {...props} />} />
            <PrivateRoute path='/articles' component={Articles}/>

        </>

    )
}