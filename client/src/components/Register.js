import React, {useState} from 'react'

function Register() {

    const [newUser, setNewUser] = useState({})

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const onHandleRegisterUser = () => {
        fetch('http://localhost:1200/user/register-user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(response => response.json())
        .then(json => console.log(json))
    }

    return(<>
    
        <div className="row container">
            <div className="col s12">
                <div className="blue lighten-5">
                    <p>Contact Info</p>
                    <input type="text" onChange={handleChange} name="firstName" placeholder="first name" />
                    <input type="text" onChange={handleChange} name="lastName" placeholder="last name" />
                    <input type="email" onChange={handleChange} name="email" placeholder="email" />
                    <input type="text" onChange={handleChange} name="phone" placeholder="phone number" />
                    <input type="password" onChange={handleChange} name="password" placeholder="choose a password" />
                </div>
                <div className="blue lighten-5">
                    <p>Address</p>
                    <input type="text" onChange={handleChange} name="street" placeholder="street" />
                    <input type="text" onChange={handleChange} name="city" placeholder="city" />
                    <input type="text" onChange={handleChange} name="state" placeholder="state" />
                    <input type="text" onChange={handleChange} name="zip" placeholder="zip code" />
                </div>
                <a onClick={onHandleRegisterUser} className="login-page-links" href="/register">
                    <div className="button-as">
                        <div id="carryout-button-div" className="col l12 s12 m12 green">
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

export default Register