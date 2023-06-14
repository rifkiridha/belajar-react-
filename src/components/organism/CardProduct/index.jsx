import React from 'react';
import Button from '../../atoms/Button';

export default function CardProduct(props) {
    const {children}=props;
  return (
    <>
    <div className='rounded-lg bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 p-0.5'>
        <div className='w-full max-w-xs bg-gray-400 rounded-lg'>{children}</div>
    </div>
    </>
  )
}

const Header = (props) => {
    const {image} = props;
    return (
        <a href="#">
            <img src={image} alt="gambar" className="p-4 rounded-t-lg" />
        </a>
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
    const {children} = props;
    return (
        <>
        <div className='px-5 py-4 text-center'>
            <a href="#">
                <p className="text-slate-900 text-base">{children}</p>
            </a>
            <form action="/beli">
        <Button color="bg-blue-500">Beli</Button>
    </form>
        </div>
        </>
    )
}

CardProduct.Header=Header
CardProduct.Body=Body
CardProduct.Footer=Footer