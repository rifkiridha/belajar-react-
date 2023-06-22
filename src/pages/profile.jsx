import React from "react";
import { useLogin } from "../hooks/useLogin";

export const ProfilePage = () => {
    // cara manggil custom hooks

const username = useLogin();
return(
    <div>
        Ini adalah profil
        <h1>username : {username} </h1>
    </div>
)
}