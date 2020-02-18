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
            localStorage.setItem('jsonwebtoken', token)
            setAuthenticationHeader(token)
            props.onLoginSuccess(token)
        })
    }

    return(<>
    
        <div className="container">

            <h1>Welcome back!</h1>
            <input onChange={handleChange} type="text" name="email" placeholder="email" />
            <input onChange={handleChange} type="password" name="password" placeholder="password" />
            <button onClick={onHandleLogin} className="col l6 s12 m12 purple login-button-div">
                <div className="button-as">
                    <div id="delivery-button-div" className="col l6 s12 m12 purple">
                        <div>
                            <i className="material-icons delivery-icon">directions_run</i>
                            <h1 className="button-h1s">Login</h1>
                        </div>
                    </div>
                </div>
            </button>

            <h4>Don't have an account?</h4>
            <h1 className="join-us">Join Us</h1>
            <a className="login-page-links" href="/register">
                <div className="button-as">
                    <div id="carryout-button-div" className="col l6 s12 m12 green">
                        <div>
                            <i className="material-icons carryout-icon">person_add</i>
                            <h1 className="button-h1s">Register</h1>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    
    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginSuccess: (token) => dispatch({type: 'ON_LOGIN_SUCCESS', token: token})
    }
}

export default connect(null, mapDispatchToProps)(Login)