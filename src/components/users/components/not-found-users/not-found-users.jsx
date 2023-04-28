import React from 'react';
import img from "../../../../assets/img.png"
import "./not-found-users.css"

function NotFoundUsers() {
    return (
        <div className={"empty-users"}>
            <img src={img} alt="img"/>
            <h2>Users not found, Please add users</h2>
        </div>
    );
}

export default NotFoundUsers;