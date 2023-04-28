import React from 'react';
import {Link, NavLink} from "react-router-dom"
import "./navbar.css"

function Navbar() {
  return (
    <header>
        <div>
            <NavLink to="/profile/"><h4>Home</h4></NavLink>
            <NavLink to="/profile/mentor"><h4>Наставники</h4></NavLink>
            <NavLink to="/profile/users"><h4>Учащиеся</h4></NavLink>
        </div>
        <div>
            <NavLink to={"tel: +998942774846"}><h4>Поддерживать</h4></NavLink>
            <NavLink to={"/profile/settings"}><h4>Настройки</h4></NavLink>
        </div>
    </header>
  )
}

export default Navbar