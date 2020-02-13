// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// COMPONENT IMPORTS
import App from './App';
import Navbar from './components/Navbar'
import CustomerInfo from './components/CustomerInfo'
import Menu from './components/Menu'
import Register from './components/Register'

// CSS IMPORTS
import './css/index.css';
import './css/Navbar.css'
import './css/CustomerInfo.css'
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component = {App} />
                <Route exact path='/register' component = {Register} />
                <Route exact path='/order-details' component = {CustomerInfo} />
                <Route exact path='/menu' component = {Menu} />
            </Switch>
        </BrowserRouter>
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
