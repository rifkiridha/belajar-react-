import React from 'react'
import InputForm from '../../molecules/InputForm';
import Button from '../../atoms/Button';

export default function Register() {
  return (
    <form action="">
        <InputForm label="Name" name="name" type="name" placeholder="Masukkan nama"/>
        <InputForm label="username" name="username" type="username" placeholder="Masukkan username"/>
        <InputForm label="Email" name="email" type="email" placeholder="Masukkan email :"/>
        <InputForm label="Password" name="password" type="password" placeholder="Masukkan password"/>
        <Button color="bg-blue-500">Register</Button>
    </form>
  )
}
