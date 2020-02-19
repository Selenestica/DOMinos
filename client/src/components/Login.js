import React, {useState} from 'react'
import {connect} from 'react-redux'
import {setAuthenticationHeader} from '../utils/authentication'

function Login(props) {

    const [loginInfo, setLoginInfo] = useState({})

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    const onHandleLogin = () => {
        fetch('http://localhost:1200/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(response => response.json())
        .then(json => {
            const token = json.token
            const userEmail = loginInfo.email
            localStorage.setItem('jsonwebtoken', token)
            localStorage.setItem('userEmail', userEmail)
            setAuthenticationHeader(token)
            props.onLoginSuccess(token)
            props.setUser(userEmail)
            window.location.href = "/"
        })
    }

    return(<>
    
        <div className="container row">

            <div className="col l8 offset-l3 s12 m12">
                <h1>Welcome back!</h1>
                <input onChange={handleChange} type="text" name="email" placeholder="email" />
                <input onChange={handleChange} type="password" name="password" placeholder="password" />
                <a onClick={onHandleLogin} className="green login-button-div">
                    <div className="button-as">
                        <div id="delivery-button-div" className="green">
                            <div>
                                <i className="material-icons delivery-icon">directions_run</i>
                                <h1 className="button-h1s">Login</h1>
                            </div>
                        </div>
                    </div>
                </a>

                <h5 className="no-account-h4">Don't have an account?</h5>
                <a className="login-page-links" href="/register">
                    <div className="button-as">
                        <div id="carryout-button-div" className="purple">
                            <div>
                                <i className="material-icons carryout-icon">person_add</i>
                                <h1 className="button-h1s">Register</h1>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    
    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginSuccess: (token) => dispatch({type: 'ON_LOGIN_SUCCESS', token: token}),
        setUser: (userEmail) => dispatch({type: 'SET_USER_EMAIL', userEmail: userEmail})
    }
}

export default connect(null, mapDispatchToProps)(Login)