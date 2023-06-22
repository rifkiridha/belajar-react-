import React from 'react';
import Button from '../../atoms/Button';
import { Link } from 'react-router-dom';

export default function CardChara(props) {
    const {children}=props;
  return (
    <>
    <div className='rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1'>
        <div className='w-full max-w-xs bg-white rounded-lg'>{children}</div>
    </div>
    </>
  )
}

const Header = (props) => {
    const {image,id} = props;
    return (
        <Link to={`/rickandmorty/${id}`}>
            <img src={image} alt="gambar" className="p-4 rounded-t-lg" />
        </Link>
    )
}

const Body = (props) =>{
    const {title,children}=props;
    return (
        <>
        <div className='px-5 py-2'>
            <a href="#">
                <h5 className="text-3xl font-bold text-slate-900">{title}</h5>
                <p className="mt-2 text-slate-600 text-base text-justify">{children}</p>
            </a>
        </div>
        </>
    )
}

const Footer = (props) => {
    const {children,price,handleToCart,id} = props;
    return (
        <>
        <div className='px-5 py-4 text-center'>
            <a href="#">
                <p className="text-slate-900 text-base">
                    Harga : {price.toLocaleString("id-ID",{style:"currency", currency:"IDR"})}
                </p>
            </a>
            <form action="/beli">
        <Button type="button" size="w-full" color="bg-blue-500" onClick={()=>handleToCart(id)}>Beli</Button>
    </form>
        </div>
        </>
    )
}

CardChara.Header=Header
CardChara.Body=Body
CardChara.Footer=Footer