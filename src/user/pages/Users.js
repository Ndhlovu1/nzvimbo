import React from "react";
import UsersList from '../components/UsersList'


const Users = () => {

    //DUMMY CONSTANT OF USERS
    const USERS = [
        {
            id: '1',
            name: 'Tinomudaishe Ndhlovu',
            image: "https://ndhlovu1.github.io/img/me2.jpg",
            places: 2
        },
        
]


    return (
        <UsersList user={USERS} />
    )
}

export default Users;