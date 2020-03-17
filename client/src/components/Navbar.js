import React from 'react'
import { slide as Menu} from 'react-burger-menu'

function Navbar() {

    return(<>

        <nav className="desktop-menu">
            <div className="nav-wrapper white">
            <a href="/" className="brand-logo black-text">DOMino's</a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down navbar-ul">
                <li><a href="/order-details"><i className="material-icons burger-menu-icons">local_pizza</i></a></li>
            </ul>
            </div>
        </nav>

        <nav className="nav-wrapper white burger-menu">
            <div>
                <Menu>
                    <li><a href="/"><i className="material-icons burger-menu-icons">home</i></a></li>
                    <li><a href="/order-details"><i className="material-icons burger-menu-icons">local_pizza</i></a></li>
                </Menu>
            </div>
        </nav>
    
    </>)

}

export default Navbar