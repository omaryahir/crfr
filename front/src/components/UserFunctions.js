
import axios from 'axios'

export const register = newUser => {
    return axios
    .post('/api_v1/users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name, 
        username: newUser.email, 
        password: newUser.password
    })
    .then(res => {
        console.log(res)
    })

}

export const login = user => {
    return axios 
    .post('/api_v1/users/login', {
        auth: {
            username: user.email,
            password: user.password
        }
    })
    .then (res => {
        console.log(res.data)
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch (err => {
        console.log(err)
    })
}
