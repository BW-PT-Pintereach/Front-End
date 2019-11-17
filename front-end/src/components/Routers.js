import React from 'react'
import { Route } from 'react-router-dom'
import LoginSignup from '../components/LoginSignup'
import Articles from '../components/Articles'

export default function (props) {
    return (
        <>
            <Route exact path='/' component={LoginSignup} />
            <Route path='/articles' component={Articles} />
        </>

    )
}