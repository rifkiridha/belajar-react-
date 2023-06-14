import React from 'react'
import InputForm from '../../molecules/InputForm';
import Button from '../../atoms/Button';

export default function Login() {
    return (
        <div className='flex-col'>
                <InputForm label="username" name="username" type="text" placeholder="Masukkan username" />
                <br />
                <InputForm label="password" name="password" type="password" placeholder="Masukkan password" />
                <br />
                <Button>Login</Button>
        </div>
    )
}
