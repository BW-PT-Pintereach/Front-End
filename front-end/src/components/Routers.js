import React from 'react';
import { Route } from 'react-router-dom'
import LoginSignup from './LoginSignup'
import Articles from './Articles'
import PrivateRoute from './PrivateRoute';
import FormikAddEdit from './AddEdit'
import Modal from './Modal'
// import { useHistory } from 'react-router-dom'

export default function (props) {
    return (
        <>
            <Route exact path='/' render={(props) => <LoginSignup {...props} />} />
            <PrivateRoute path='/articles' component={Articles} />
            <PrivateRoute exact path='/articles/view/:id' component={Modal} />
            <PrivateRoute exact path='/articles/:method' component={Modal} />
            <Route path='/form' render={(props) => <FormikAddEdit {...props} article={'article'} />} />
        </>

    )
}