import React, {useEffect, useState} from "react";
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import {Home, Profile, Mentor, UsersPage, Settings, Login, NotFound} from "./pages";

function App() {

    const navigate = useNavigate()

    const [isAdmin, setIsAdmin] = useState(() => {
        const isAdmins = localStorage.getItem("admin");
        return isAdmins ? isAdmins : false;
    });

    return (
        <Routes>
            {isAdmin || localStorage.getItem("admin") ? (
                <>
                    <Route path="/" element={<Navigate to="/profile/"/>}/>
                    <Route path="/profile/" element={<Profile/>}/>
                    <Route path="/profile/mentor" element={<Mentor/>}/>
                    <Route path="/profile/users" element={<UsersPage/>}/>
                    <Route path="/profile/settings" element={<Settings/>}/>
                </>
            ) : (
                <>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login setIsAdmin={setIsAdmin}/>}/>
                </>
            )}
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
