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

                return (<>

                        <div className="row">
                            <div className="col blue lighten-5">
                                <div>
                                    <p>Address: {address}</p>
                                </div>
                                <div>
                                    <p>Name: {firstName} {lastName}</p>   
                                </div>
                                <div>
                                    <p>Email: {email}</p>  
                                </div>
                                <div>
                                    <p>Phone: {phone}</p>  
                                </div>
                            </div>
                        </div>
                
                </>)
            }
            setUserInfo(userData)
        })
    }, [])

    return(<>
    
        <div className="container">

            <h1>Your Pizza Profile</h1>
            {userInfo}

        </div>
    
    </>)

}

export default UserProfile