import React, {useState} from 'react'

function CustomerInfo() {

    const [customerInfo, setCustomerInfo] = useState({})

    const handleChange = (e) => {
        setCustomerInfo({
            ...customerInfo,
            [e.target.name]: e.target.value
        })
    }

    const onHandleSubmitCustomerInfo = () => {
        fetch('')
    }

    return(<>

        <div className="container">
            <div className="row">
                <div className="col s12 m8 l6">
                    <div className="purple lighten-4">
                        <p>Contact Info</p>
                        <input placeholder="first name" />
                        <input placeholder="last name" />
                        <input placeholder="email" />
                        <input placeholder="phone number" />
                    </div>
                    <div className="blue lighten-4">
                        <p>Address</p>
                        <input placeholder="street" />
                        <input placeholder="city" />
                        <input placeholder="state" />
                        <input placeholder="zip code" />
                    </div>
                    <a href="/menu"><button>Next Step</button></a>
                </div>
            </div>
        </div>   

    </>)

}

export default CustomerInfo