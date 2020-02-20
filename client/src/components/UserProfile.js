import React, {useState, useEffect} from 'react'

function UserProfile() {

    //const userEmail = props.userEmail
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail')
        fetch(`http://localhost:1200/user/view-user-profile/${userEmail}`)
        .then(response => response.json())
        .then(json => {
            
            const userData = () => {

                const address = Object.values(json.address)
                const firstName = Object.values(json.firstName)
                const lastName = Object.values(json.lastName)
                const email = Object.values(json.email)
                const phone = Object.values(json.phone)
                const delivery_address = Object.values(json.pastOrders.delivery_address)

                return (<>
                                
                        <p className="p-titles">Your contact information</p>
                        <p><b>Address:</b> {address}</p>
                        <p><b>Name:</b> {firstName} {lastName}</p>   
                        <p><b>Email:</b> {email}</p>  
                        <p><b>Phone:</b> {phone}</p>  
                        <p><b>Your last delivery address:</b> {delivery_address}</p>
                        <p className="p-titles">Your order history</p>
                
                </>)
            }
            setUserInfo(userData)
        })
    }, [])

    return(<>
    
        <div className="container">
            <div className="row">
                <div className="col l10 offset-l1 s12 m12 pizza-profile-div">
                    <div className="profile-h4-div">
                        <h4>Your Pizza Profile</h4>
                    </div>
                    {userInfo}

                </div>
            </div>
        </div>
    
    </>)

}

export default UserProfile