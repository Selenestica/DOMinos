import React from 'react'

function Login() {

    return(<>
    
        <div className="container">

            <h1>Welcome back!</h1>
            <input type="text" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <a className="login-page-links">
                <div className="button-as login-button-div">
                    <div id="delivery-button-div" className="col l6 s12 m12 purple">
                        <div>
                            <i className="material-icons delivery-icon">directions_run</i>
                            <h1 className="button-h1s">Login</h1>
                        </div>
                    </div>
                </div>
            </a>

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

export default Login