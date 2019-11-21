import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth, {setStorage, getId} from '../utils/axiosWithAuth'

const LoginSignup = (props) => {
    const history = useHistory();

    const [loginError, setLoginError] = useState(false);
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const handleAuth = e => {
        e.preventDefault()
        const path = e.target.id === 'login' ? 'auth/login' : 'auth/register'
        axiosWithAuth()
            .post(path, data)
            .then(result => {
                setStorage({
                    name: 'id',
                    value: result.data.newUsers !== undefined ? result.data.newUsers.id : getId() 
                }, {
                    name: 'token',
                    value: result.data.token
                });
                history.push('/articles');
            })
            .catch(error => {
                console.log(error);
                setLoginError(true);
            });
    }

    return (
        <>
        <form>
            {loginError && <h3>Incorrect Credentials</h3>}
            <input type='username' name='username' placeholder='Username' value={data.username} onChange={handleChange} />
            <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} />
            <button type='submit' id='login' onClick={handleAuth}>Log In</button>
            <button type='submit' id='register' onClick={handleAuth}>Sign Up</button>
        </form>


        </>
    )
}

export default LoginSignup