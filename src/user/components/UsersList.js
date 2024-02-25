import React from "react";
import './UsersList.css'
import UserItem from './UserItem'

const UsersList = props => {

   if (props.user.length === 0) {
        return <div className="center">
                <h2>No Users Fournd</h2>
            </div>
   }

   return (
    <u className="users-list">
        {/* RETURN THE ARRAY OF USERS' INFORMATION RETURNING FROM THE USERS ARRAY  */}
        {props.user.map(user_info => {
           return <UserItem 
            key={user_info.id}
            id = {user_info.id}
            image = {user_info.image}
            name = {user_info.name}
            // Show the number of places that the user has created
            placeCount = {user_info.places}
           
           />
        })}
    </u>
    )
   
}
//We will use some props from the parent, This will be passed into the Users Page/Container

export default UsersList;
