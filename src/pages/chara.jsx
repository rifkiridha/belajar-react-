import React, { useEffect, useState } from 'react'
import { getChara } from '../services/chara.services';
import Button from '../components/atoms/Button';
import CardProduct from '../components/organism/CardProduct';



export default function CharaPage() {
  // state = data/penyimpanan private yang dipake buat menghandle komponen2 yg berubah2

  const [data, setData] = useState([]);

  
  // componentDidUpdate


  const handleLogout = () => {
    localStorage.clear();
    
    window.location.href = "/login";
  };

  // get data  using useEffect

  useEffect(() => {
    getChara((data) => {
      console.log(data);
      setData(data.data);
    })
  })

  return (
    <>
      <div className="flex bg-gray-800 text-white font-semibold px-4 py-4">
        <div className='w-4/6 flex flex-wrap justify-center items-center min-h-screen gap-6'>
          {data.length > 0 && data.map((data) => (
            <CardProduct key={data.id}>
              <CardProduct.Header image={data.imageUrl} id={data.id} />
              <CardProduct.Body title={data.name}>Ini Karakter Disney</CardProduct.Body>
            </CardProduct>

          ))}
        </div>
      </div>
    </>
  )
}

