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
        })
        .then(response => response.json())
        .then(window.location.href = "/login")
    }

    return(<>
    
        <div className="row container">
            <div className="col s12 m12 l8 offset-l3">
                
                <div className="register-col-div">
                    <div>
                        <p className="p-titles">Contact Info</p>
                        <input type="text" onChange={handleChange} required name="firstName" placeholder="first name" />
                        <input type="text" onChange={handleChange} required name="lastName" placeholder="last name" />
                        <input type="email" onChange={handleChange} required name="email" placeholder="email" />
                        <input type="text" onChange={handleChange} required name="phone" placeholder="phone number" />
                        <input type="password" onChange={handleChange} required name="password" placeholder="choose a password" />
                    </div>
                    <div>
                        <p className="p-titles">Address</p>
                        <input type="text" onChange={handleChange} required name="street" placeholder="street" />
                        <input type="text" onChange={handleChange} required name="city" placeholder="city" />
                        <input type="text" onChange={handleChange} required name="state" placeholder="state" />
                        <input type="text" onChange={handleChange} required name="zip" placeholder="zip code" />
                    </div>
                </div>
                <a onClick={onHandleRegisterUser} className="login-page-links">
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