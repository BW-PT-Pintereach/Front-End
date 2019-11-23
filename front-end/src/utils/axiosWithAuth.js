import axios from 'axios'
import jwtDecode from 'jwt-decode';

export function getToken() {
    return localStorage.getItem('token')
}

export function getId() {
    return localStorage.getItem('id')
}

export function setStorage(...args) {
    console.log(args, args.length)
    args.forEach(arg => localStorage.setItem(arg.name, arg.value))
}

export function decodeUserId(token){
    return jwtDecode(token).subject;
}

export default function() {
    return axios.create({
        baseURL: 'https://lambda-bw-pintereach.herokuapp.com/api/',
        headers: {
            Authorization: getToken()
        }
    })
}