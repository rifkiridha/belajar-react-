import React, { useRef } from 'react'
import InputForm from '../../molecules/InputForm';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import { useEffect,useState } from 'react';

export default function Login() {
    const handleLogin = (event) => {
        event.preventDefault();
        console.log("terklik login");
        console.log(event.target.saveinfo.value);
        if (event.target.saveinfo.checked) {
            console.log(event.target.email.value);
            console.log(event.target.password.value);
            localStorage.setItem("email", event.target.email.value);
            localStorage.setItem("password", event.target.password.value);
            localStorage.setItem("saveinfo", event.target.saveinfo.value);
        } else {
            localStorage.setItem("email", "");
            localStorage.setItem("password", "");
            localStorage.setItem("saveinfo", "false");
        }
        alert("Succesfully login!");
        window.location.href = "/product"
    };


    // useRef = hooks yang biasa dipake untuk akses  dom


    const emailRef = useRef(null);
    // useEffect(()=>{
    //     ()=>{emailRef.current.focus()};
    // },[]);

    useEffect(()=>{
        emailRef.current.focus();
    },[]);

    return (
    
        <form action="" onSubmit={handleLogin}>
            <fieldset>
            <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" defaultValue={localStorage.getItem("email")} ref={emailRef} />
            <InputForm label="Password" name="password" type="password" placeholder="Masukkan password" defaultValue={localStorage.getItem("password")} />
            <Label htmlFor="saveinfo" ><Input id="saveinfo" name="saveinfo" label="Ingat Saya" type="checkbox" />Ingat Saya</Label>
            <br />
            </fieldset>

            <Button color="bg-blue-500">Login</Button>              
        </form>
    )
}
