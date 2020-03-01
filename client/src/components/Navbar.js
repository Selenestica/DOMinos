import React from 'react'
import { slide as Menu} from 'react-burger-menu'
import {connect} from 'react-redux'

function Navbar(props) {

    const signedIn = props.isAuthenticated

    const onHandleSignOut = () => {

        const token = localStorage.getItem('jsonwebtoken')
        localStorage.removeItem('jsonwebtoken')
        props.signOut(token)
    }

    return(<>

        <nav className="desktop-menu">
            <div className="nav-wrapper white">
            <a href="/" className="brand-logo black-text">DOMino's</a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down navbar-ul">
                <li><a href="/order-details"><i className="material-icons burger-menu-icons">local_pizza</i></a></li>
                {!signedIn ? <li><a href="/login">login</a></li> : null}
                {signedIn ? <li><a href="/your-profile"><i className="material-icons carryout-icon">account_circle</i></a></li> : null}
                {signedIn ? <li><a className="sign-out-a"><button className="sign-out-button" onClick={onHandleSignOut}><i className="material-icons delivery-icon">exit_to_app</i></button></a></li> : null}
                {!signedIn ? <li><a href="/register">register</a></li> : null}
            </ul>
            </div>
        </nav>

        <nav className="nav-wrapper white burger-menu">
            <div>
                <Menu>
                    <li><a href="/"><i className="material-icons burger-menu-icons">home</i></a></li>
                    <li><a href="/order-details"><i className="material-icons burger-menu-icons">local_pizza</i></a></li>
                    {!signedIn ? <li><a href="/login">login</a></li> : null}
                    {signedIn ? <li><a href="/your-profile"><i className="material-icons burger-menu-icons">account_circle</i></a></li> : null}
                    {signedIn ? <li><a className="sign-out-a"><button className="sign-out-button" onClick={onHandleSignOut}><i className="material-icons burger-menu-icons">exit_to_app</i></button></a></li> : null}
                    {!signedIn ? <li><a href="/register">register</a></li> : null}
                </Menu>
            </div>
        </nav>
    
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

/*

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

*/ 