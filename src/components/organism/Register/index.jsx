import React from 'react'
import InputForm from '../../molecules/InputForm';
import Button from '../../atoms/Button';

export default function Register() {
    return (
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <InputForm colspan="sm:col-span-3" label="Nama Depan" name="firstname" type="text" placeholder="Masukkan Nama Depan" />          
            <InputForm colspan="sm:col-span-3" label="Nama Belakang" name="lastname" type="text" placeholder="Masukkan Nama Belakang" />           
            <InputForm colspan="sm:col-span-3" label="username" name="username" type="text" placeholder="Masukkan username" />
            <InputForm colspan="sm:col-span-3" label="e-mail" name="email" type="email" placeholder="Masukkan e-mail" /> 
            <InputForm colspan="sm:col-span-3" label="password" name="password" type="password" placeholder="Masukkan password" /> 
            <InputForm label="Alamat" name="address" type="text" placeholder="Masukkan Alamat" />
            <InputForm colspan="sm:col-span-2" label="Kota" name="city" type="text" placeholder="Masukkan Kota" />
            <InputForm colspan="sm:col-span-2" label="Provinsi" name="province" type="text" placeholder="Masukkan Provinsi" />         
            <InputForm colspan="sm:col-span-2" label="Kode Pos" name="postalcode" type="text" placeholder="Masukkan Kode Pos" />
            <Button>Daftar</Button>
            </div>     
    )
}

