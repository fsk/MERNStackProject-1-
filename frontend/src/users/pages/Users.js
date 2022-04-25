import React from "react";
import UsersList from "../components/UsersList";



const Users = () => {

    const USERS = [{id: 'u1', name: 'FSK', image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', places: 8}];
    return(
        <UsersList items={USERS}/> 
    );
}

export default Users;