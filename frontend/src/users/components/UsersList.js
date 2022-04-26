import React from "react";


import UserItem from "./UserItem";
import Card from '../../shared/Components/UIElement/Card'
import './UsersList.css'

const UsersList = props => {
    console.log("**",props.items);
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Users found.</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {props.items.map((user) => {
                return <UserItem key={user.id} user={user}/>
            })}
        </ul>
    );
}

export default UsersList;