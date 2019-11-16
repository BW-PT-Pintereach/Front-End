import React from 'react'
import {Route} from 'react-router-dom'
import LoginSignup from '../components/LoginSignup'

export default function(props) {
    return (
        <Route exact path='/' component={LoginSignup} />
    )
}