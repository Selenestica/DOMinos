import React from 'react'
import {connect} from 'react-redux'

export default function(ComposedComponent) {

    const Authenticate = (props) => {

        if (!props.isLoggedIn) {
            props.history.push('/')
        }

        return <ComposedComponent {...props} />
    }

    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate)
}