import React, {useState} from 'react';
import "./login.css"
import logo from "../../assets/Xisobot_logo-removebg-preview (1).png"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function Login({setIsAdmin}) {

    const navigate = useNavigate()

    const [value, setValue] = useState({
        login: "",
        password: ""
    })

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value.login === "admin" && value.password === "hello123") {
            navigate("/profile/")
            localStorage.setItem("admin", true)
            setIsAdmin(true)
        } else {
            localStorage.setItem("admin", false)
            setIsAdmin(false)
            toast.error("this user not found!")
        }
    }

    return (
        <div className="wrapper-login">
            <div className="header-login">
                <a href="#" className="logo-login">
                    <img src={logo} alt=""/>
                </a>
            </div>

            <form className="form-login" onSubmit={handleSubmit}>
                <label htmlFor="user">
                    Username or email address
                    <input className="field" type="text" name="login" id="user" autoFocus onChange={handleChange} value={value.login}/>
                </label>
                <label htmlFor="password">
                    Password <span><a href="#">Forgot password?</a></span>
                    <input className="field" type="password" name="password" id="password" onChange={handleChange} value={value.password}/>
                </label>

                <input className="button" type="submit" value="Sign in"/>
            </form>
        </div>
    );
}

export default Login;