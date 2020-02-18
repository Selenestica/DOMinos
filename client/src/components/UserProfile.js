import React, {useState, useEffect} from 'react'

function UserProfile() {

    //const userEmail = props.userEmail
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail')
        fetch(`http://localhost:1200/user/view-user-profile/${userEmail}`)
        .then(response => response.json())
        .then(json => {
            
            const userData = Object.keys(json).map((key) => {

                return (<>
                
                    <li>
                        {key}
                    </li>

                </>)

            })
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