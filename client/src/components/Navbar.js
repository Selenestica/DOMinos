import React from 'react'

function Navbar() {

    return(<>
    
        <nav>
            <div className="nav-wrapper white">
            <a href="/" className="brand-logo black-text">DOMino's</a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down navbar-ul">
                <li><a href="/login">login</a></li>
                <li><a href="/log-out">sign out</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li><a href="/">Home</a></li>
            <li><a href="/login">login</a></li>
            <li><a href="/log-out">sign out</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
    
    </>)

}

export default Navbar