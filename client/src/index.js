// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import reducer from './reducers/reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { setAuthenticationHeader } from './utils/authentication';

// COMPONENT IMPORTS
import App from './App';
import Navbar from './components/Navbar'
import CustomerInfo from './components/CustomerInfo'
import FullMenu from './components/FullMenu'
import Register from './components/Register'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import requireAuth from './components/requireAuth'

// CSS IMPORTS
import './css/index.css'
import './css/Navbar.css'
import './css/FullMenu.css'
import './css/CustomerInfo.css'
import './css/PizzaMenu.css'
import './css/ClosestStore.css'
import './css/Login.css'
import 'materialize-css/dist/css/materialize.min.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

const token = localStorage.getItem('jsonwebtoken')
setAuthenticationHeader(token)
if (token !== null) {
    store.dispatch({type: 'ON_LOGIN_SUCCESS', token: token})
}

ReactDOM.render(

            <Provider store = {store}>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component = {App} />
                        <Route exact path='/login' component = {Login} />
                        <Route exact path='/register' component = {Register} />
                        <Route exact path='/order-details' component = {CustomerInfo} />
                        <Route exact path='/full-menu' component = {FullMenu} />
                        <Route exact path='/your-profile' component = {requireAuth(UserProfile)} />
                    </Switch>
                </BrowserRouter>
            </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
