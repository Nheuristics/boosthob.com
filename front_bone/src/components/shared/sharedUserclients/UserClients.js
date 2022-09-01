import React from 'react'
import Avatar from 'react-avatar';

const UserClients = ({username})=> {
    return (
            <React.Fragment>
                <div className='UC-usertag'>
                    <Avatar name={username} size={30} round="50px"/>
                    {/* <span className='UC-user' >{username}</span> */}

                </div>
          </React.Fragment>


    )
}
export default UserClients;
