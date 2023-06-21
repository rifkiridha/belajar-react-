import React, { useState } from 'react'
import InputForm from '../../molecules/InputForm';
import Button from '../../atoms/Button';
import Popup from 'reactjs-popup';

export default function Register() {


  const handleRegister = (event) => {
    event.preventDefault();
    if (confirm("Apakah kamu ingin register?")) {
      console.log("Anda Terdaftar");
      localStorage.setItem("email", event.target.email.value);
      localStorage.setItem("password", event.target.password.value);
      localStorage.setItem("saveinfo", "false")
      alert(`Selamat Datang, ${localStorage.getItem("email").split("@gmail.com")}!`);
      window.location.href = "/product"
    }
  }
  const [reg, setReg] = useState(false);
  const handleReg = (event) => {
    if (confirm("Apakah kamu ingin pindah ke product?")) {
      setReg(true)
    } else {
      setReg(false)
    }
    if (reg == true) {
      window.location.href = "/product"
    }
  }



  return (
    <form action="" onSubmit={handleRegister}>
      <fieldset>
        <InputForm label="Name" name="name" type="name" placeholder="Masukkan nama" />
        <InputForm label="username" name="username" type="text" placeholder="Masukkan username" />
        <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" />
        <InputForm label="Password" name="password" type="password" placeholder="Masukkan password" />
      </fieldset>
      <Button color="bg-blue-500">Register</Button>
      <Button type="button" size="w-full" color="bg-blue-500" onClick={() => handleReg()}>Pindah ke product</Button>
      <Popup trigger={<button className="button"> Open Modal </button>} modal>
        <span> Modal content </span>
      </Popup>
    </form>

  )
}
