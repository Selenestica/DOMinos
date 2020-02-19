import React from 'react'
import {connect} from 'react-redux'

function Navbar(props) {

    const signedIn = props.isAuthenticated

    const onHandleSignOut = () => {

        const token = localStorage.getItem('jsonwebtoken')
        console.log(localStorage.getItem('jsonwebtoken'))
        localStorage.removeItem('jsonwebtoken')
        props.signOut(token)
    }

    return(<>
    
        <nav>
            <div className="nav-wrapper white">
            <a href="/" className="brand-logo black-text">DOMino's</a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down navbar-ul">
                {!signedIn ? <li><a href="/login">login</a></li> : null}
                {signedIn ? <li><a href="/your-profile"><i className="material-icons carryout-icon">account_circle</i></a></li> : null}
                {signedIn ? <li><a className="sign-out-a"><button className="sign-out-button" onClick={onHandleSignOut}><i className="material-icons delivery-icon">exit_to_app</i></button></a></li> : null}
                {!signedIn ? <li><a href="/register">register</a></li> : null}
            </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li><a href="/">Home</a></li>
            {!signedIn ? <li><a href="/login">Login</a></li> : null}
            {signedIn ? <li><a href="/log-out">Sign out</a></li> : null}
            {!signedIn ? <li><a href="/register">Register</a></li> : null}
            {signedIn ? <li><a href="/your-profile">Your Pizza Profile</a></li> : null}
        </ul>
    
    </>)

}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: (token) => dispatch({type: 'SIGN_OUT', token: token})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)