import React, { useState, createContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { message } from "antd";


export const UserContext = createContext();

export const UserProvider = props => {

    const [loginStatus, setLoginStatus] = useState(Cookies.get('email') ? true : false);
    const [userInfo, setUserInfo] = useState({
        name: Cookies.get('name'),
        email: Cookies.get('email'),
        token: Cookies.get('token')
    } || {})



    const [dark, setDark] = useState(true);
    const urlLogin = "https://backendexample.sanbersy.com/api/user-login"
    const urlRegister = "https://backendexample.sanbersy.com/api/register "

    const header = {
        Authorization: "Bearer " + Cookies.get("token"),
    };

    const loginForm = (e) => {

        axios.post(`${urlLogin}`, {
            "email": e.email,
            "password": e.password
        })
            .then((res) => {
                console.log(res)
                setUserInfo(res.data);
                setLoginStatus(true);
                Cookies.set('name', res.data.user.name, { expires: 1 })
                Cookies.set('email', res.data.user.email, { expires: 1 })
                Cookies.set("token", res.data.token, { expires: 1 })
                window.location = "/";
            })
    }
    const registerForm = (e) => {
        axios.post(`${urlRegister}`, {
            "name": e.name,
            "email": e.email,
            "password": e.password,
        })
            .then((res) => {
                console.log(res)
                message.success("Your data has been registered!", 2.5);
                window.location = "/login";
            })

    }

    return (
        <UserContext.Provider value={{ loginStatus, setLoginStatus, loginForm, userInfo, setUserInfo, registerForm, header, dark, setDark }}>
            {props.children}
        </UserContext.Provider>
    );
};
