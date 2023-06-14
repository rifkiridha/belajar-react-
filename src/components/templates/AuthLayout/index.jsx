import React from 'react'
import { Link } from 'react-router-dom';
import AppLogin from '../../../pages/login';
import Login from '../../organism/Login';
import Register from '../../organism/Register';


export default function AuthLayout(props) {
    const { title, desc, type } = props;
    return (
        <>
            <div className='flex-col'>
                <p className="font-medium">{title}</p>
                <p className="text-xs">{desc}</p>
                <LogRegist type={type} />
                <Navigasi type={type} />
            </div>


        </>
    )
}


const Navigasi = ({ type }) => {
    if (type === "login") {
        return (
            <p className="text-sm mt-5 text-center text-gray-200">
                gapunya akun?{" "}
                <Link to="/register" className="text-gray-350 font-bold">
                    Daftar
                </Link>
            </p>
        )
    } else {
        return (
            <p className="text-sm mt-5 text-center text-gray-200">
                Udah punya akun?{" "}
                <Link to="/login" className="text-gray-350 font-bold">
                    Masuk
                </Link>
            </p>
        )
    }
}

const LogRegist = ({ type }) => {
    if (type === "login") {
        return (
            <Login />
        )
    } else {
        return (
            <Register />
        )
    }
}
