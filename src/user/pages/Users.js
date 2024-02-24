import React from "react";
import UsersList from '../components/UsersList'


const Users = () => {

    //DUMMY CONSTANT OF USERS
    const USERS = [
        {
            id: '1',
            name: 'The-Back-End-Guru',
            image: "https://ndhlovu1.github.io/img/me2.jpg",
            places: 4
        }
]


    return (
        <UsersList users={USERS} />
    )
}

export default Users;